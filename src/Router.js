//. Router.js
import { Routes, Route } from 'react-router-dom';
import { Issues } from './Issues';
//import { Comments } from './Comments';

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" component={Issues} />
    </Routes>
  );
};
