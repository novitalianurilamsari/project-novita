import logo from './Spotify.svg';
import './App.css';
import data from './data/data.js';
import React, { useEffect } from 'react';

const URL =
  'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json';

//mendapatkan data
const getSongs = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    // menampilkan data
    console.log(data);
    return data;
  } catch (error) {
    // akan muncul alert error
    alert(error);
    return error;
  }
};

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_YOUR_SPOTIFY_APP;
  
function App() {
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    getSongs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Create Playlist<span>...</span></h1>
        <h2>now you can create your own playlist for free</h2>
      </header>
      <body>
          <div class='songPlaylist'>
              <img className='album-image' src={data.album.images[0].url} alt="album-cover"/>
              <p className='text-title' id="trackTitle">{data.name}</p>
              <p className='text-artist'>{data.album.artists[0].name}</p>
              <p className='text-album'>{data.album.name}</p>
              <button type='button' className='button-action' value='Select'> Select</button>
          </div>
      </body>
      </div>
    );
  }

export default App;
