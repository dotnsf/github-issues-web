//. src/Home.js
import { Issues } from "./Issues";

export const Home = () => {
  return (
    <div>
      <Issues appServer={app_server} repo={repo}/>
    </div>
  );
};
