//. Comments.js
import { VFC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css';
import Markdown from 'marked-react';

export const Comments : VFC = ( {appServer} ) => {
  const params = useParams();  //. { user: "a", repo: "b", issue_num: "c" }
  const user = params.user;
  const repo = params.repo;
  const issue_num = params.issue_num;

  const [ comments, setComments ] = useState( [] );

  const retrieveComments = () => {
    fetch( appServer + '/api/github/comments/' + user + '/' + repo + '?issue_num=' + issue_num )
      .then( res => res.json() )
      .then( res => {
        if( res.status ){
          //console.log( res.comments );
          /*
          [
            { id: 1268.., body: 'xxxx', comments: 0, comments_url: 'https://..', labels: [..], milestone: null, number: 32, state: "open", title: "xxx", .. },
              :
          ]
          */
          if( res.comments.length ){
            //console.log( 'setComments', res.comments );
            setComments( res.comments );
          }
        }
      });
  }

  useEffect( () => {
    //. 初回レンダリング時のみ実行
    retrieveComments();
  }, [] );

  return (
    <div>
      <div className="issues-head">
        <button onClick={()=>window.history.back()}>戻る</button>
      </div>

      <h4>Comments</h4>
      <table id="commentsTable">
      <tbody>
      { comments.map( ( comment, index ) => 
      <tr key={index}>
        <td>{comment.id}</td>
        <td><pre><Markdown>{comment.body}</Markdown></pre></td>
      </tr>
      ) }
      </tbody>
      </table>
    </div>
  );
}
