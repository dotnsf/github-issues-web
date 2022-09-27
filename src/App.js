//. App.js
import { Issues } from "./Issues";

function App(){
  const app_server = 'REACT_APP_APP_SERVER' in process.env ? process.env.REACT_APP_APP_SERVER : '';

  return (
    <div>
      <Issues appServer={app_server}/>
    </div>
  );
}

export default App;
