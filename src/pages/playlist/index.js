import {SongPlaylist} from '../../components';
import './style.css';
import logo from '../../Spotify.svg';

const Playlists = () => {
    return (
        <div>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Create Playlist<span>...</span></h1>
                <h2>now you can create your own playlist for free</h2>
            </div>
            <div>
                <SongPlaylist />
            </div>
        </div>
    );
};

export default Playlists;