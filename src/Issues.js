//. Issues.js
import { useState } from 'react';
import './Issues.css';

export const Issues = ( {appServer} ) => {
  const [ repo, setRepo ] = useState( '' );
  const [ issues, setIssues ] = useState( [] );
  const [ comments, setComments ] = useState( [] );

  const retrieveIssues = () => {
    //console.log( appServer, repo );
    fetch( appServer + '/api/github/issues/' + repo )
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

  const retrieveComments = ( issue_num ) => {
    fetch( appServer + '/api/github/comments/' + repo + '?issue_num=' + issue_num )
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

  return (
    <div>
      <div>
        <input type="text" value={repo} onChange={(e)=>setRepo(e.target.value)}/>
        <button onClick={()=>retrieveIssues()}>Issues</button>
      </div>

      <hr/>

      <h4>Issues</h4>
      <table id="issuesTable">
      <tbody>
      { issues.map( ( issue, index ) => 
      <tr key={index}>
        <td>{issue.number}</td>
        <td>{issue.title}</td>
        <td>{issue.state}</td>
        <td>{issue.body}</td>
        <td>{issue.comments}</td>
        <td>
          <button onClick={()=>retrieveComments(issue.number)}>Comments</button>
        </td>
      </tr>
      ) }
      </tbody>
      </table>

      <hr/>

      <h4>Comments</h4>
      <table id="commentsTable">
      <tbody>
      { comments.map( ( comment, index ) => 
      <tr key={index}>
        <td>{comment.id}</td>
        <td>{comment.body}</td>
      </tr>
      ) }
      </tbody>
      </table>
    </div>
  );
}
