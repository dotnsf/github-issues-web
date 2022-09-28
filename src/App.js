//. App.js
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopPage } from "./TopPage";
import { Issues } from "./Issues";
import { Comments } from "./Comments";
import { Page404 } from './Page404';

function App(){
  const app_server = 'REACT_APP_APP_SERVER' in process.env ? process.env.REACT_APP_APP_SERVER : '';

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TopPage />
          </Route>
          <Route path="/issues/:user/:repo">
            <Issues appServer={app_server}/>
          </Route>
          <Route path="/comments/:user/:repo/:issue_num">
            <Comments appServer={app_server}/>
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
