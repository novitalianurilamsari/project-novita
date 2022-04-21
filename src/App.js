import './App.css';
import Playlists from './pages/playlist';

function App() {
  console.log(process.env.REACT_APP_YOUR_SPOTIFY_APP);
  return (
    <div className="App">
      <Playlists />
    </div>
  );
}

export default App;
