import React from "react";
import { ButtonLogin } from "../../components";
import "./style.css";
import logo from '../../Spotify.svg';

class Login extends React.Component {
  render() {
    const songScope = "playlist-modify-private"
    const rdrURI = "http://localhost:3000/callback"
    const linkURL = `https://accounts.spotify.com/en/authorize?client_id=${process.env.REACT_APP_YOUR_SPOTIFY_APP}&response_type=${"token"}&redirect_uri=${rdrURI}&scope=${songScope}`

    return (
      <div className="button-login">
      <img src={logo} className="logo" alt="logo" />
        <h1>Million of Songs.</h1>
        <h2>Free on Spotify.</h2>      
        <p>Klik Login untuk mendengarkan jutaan lagu gratis lainnya.</p>
        <ButtonLogin 
          className="button-action"
          name="Login" 
          url={linkURL}
        />
      </div>
    );
  }
}

export default Login;
