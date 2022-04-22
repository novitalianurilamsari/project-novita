import './App.css';
import * as React from "react";
import Home from './pages/home';
import Login from './pages/login';
import { Route } from "react-router-dom";
//import Playlists from './pages/playlist';

function App() {
  console.log(process.env.REACT_APP_YOUR_SPOTIFY_APP);

  return (
    <div className="App">

      <Route exact path="/" component={Login} />
      <Route path="/callback" component={Home} />

    </div>
  );
}

export default App;
