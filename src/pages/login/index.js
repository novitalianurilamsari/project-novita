import React from 'react';
import { SongButton } from '../../components';
import { API_SCOPE, REDIRECT_URI } from '../../config/constant';
import logo from '../../Spotify.svg';

function Login() {
  const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${
    process.env.REACT_APP_YOUR_SPOTIFY_APP
  }&response_type=${'token'}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;

  return (
    <div className="button-login">
      <img src={logo} className="logo" alt="logo" />
      <h1>Million of Songs.</h1>
      <h2>Free on Spotify.</h2>
      <p>Klik Login untuk mendengarkan jutaan lagu gratis lainnya.</p>
      <SongButton className="button-action" name="Login" link={linkURL} />
    </div>
  );
}

export default Login;
