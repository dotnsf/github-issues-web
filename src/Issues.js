//. Issues.js
import { VFC, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import './Issues.css';
import Markdown from 'marked-react';

export const Issues : VFC = ( {appServer} ) => {
  const params = useParams();  //. { user: "a", repo: "b" }
  const user = params.user;
  const repo = params.repo;

  const [ issues, setIssues ] = useState( [] );

  const retrieveIssues = () => {
    //console.log( appServer, repo );
    fetch( appServer + '/api/github/issues/' + user + '/' + repo )
      .then( res => res.json() )
      .then( res => {
        if( res.status ){
          //console.log( res.issues );
          /*
          [
            { id: 1268.., body: 'xxxx', comments: 0, comments_url: 'https://..', labels: [..], milestone: null, number: 32, state: "open", title: "xxx", .. },
              :
          ]
          */
          if( res.issues.length ){
            //console.log( 'setIssues', res.issues );
            setIssues( res.issues );
          }
        }
      });
  }

  const redirectToComments = ( issue_num ) => {
    //return <Redirect to='/comments/{user}/{repo}'/>
    window.location.href = '/comments/' + user + '/' + repo + '/' + issue_num;
  }

  useEffect( () => {
    //. 初回レンダリング時のみ実行
    retrieveIssues();
  }, [] );

  return (
    <div>
      <div className="issues-head">
        <button onClick={() => window.history.back()}>戻る</button>
      </div>

      <h4>Issues</h4>
      <table id="issuesTable">
      <tbody>
      { issues.map( ( issue, index ) => 
      <tr key={index}>
        <td>{issue.number}</td>
        <td>{issue.title}</td>
        <td>{issue.state}</td>
        <td><pre><Markdown>{issue.body}</Markdown></pre></td>
        <td>{issue.comments}</td>
        <td>
          <button onClick={()=>redirectToComments(issue.number)}>Comments</button>
        </td>
      </tr>
      ) }
      </tbody>
      </table>
    </div>
  );
}
