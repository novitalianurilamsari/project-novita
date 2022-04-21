import logo from './Spotify.svg';
import './App.css';
import { SongPlaylist } from '../src/components';

function App() {
  console.log(process.env.REACT_APP_YOUR_SPOTIFY_APP);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Create Playlist<span>...</span></h1>
        <h2>now you can create your own playlist for free</h2>
      </header>
      <body>
        <SongPlaylist />
      </body>
      </div>
    );
  }

export default App;
