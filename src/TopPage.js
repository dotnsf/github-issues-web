//. TopPage.js
import { VFC, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const TopPage: VFC = () => {
  const [ repo, setRepo ] = useState( '' );

  const redirectToIssues = () => {
    console.log( 'redirectToIssues', repo );
    //return <Redirect to='/issues/{repo}'/>
    window.location.href = '/issues/' + repo;
  }

  return (
    <div>
      <input type="text" value={repo} placeholder="node-red/node-red" onChange={(e)=>setRepo(e.target.value)}/>
      <button onClick={()=>redirectToIssues()}>Issues</button>
    </div>
  );
};
