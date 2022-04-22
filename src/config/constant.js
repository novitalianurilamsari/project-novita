export const SPOTIFY_ENDPOINT = 'https://api.spotify.com/v1';
export const API_SCOPE = 'playlist-modify-private';
export const REDIRECT_URI = 'http://localhost:3000';
export const SIGNIN_URL = `https://accounts.spotify.com/en/authorize?client_id=${
  process.env.REACT_APP_YOUR_SPOTIFY_APP
}&response_type=${'token'}&redirect_uri=${REDIRECT_URI}&scope=${API_SCOPE}`;
