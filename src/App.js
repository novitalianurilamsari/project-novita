/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import MyRouter from './config/route';

function App() {
  console.log(process.env.REACT_APP_YOUR_SPOTIFY_APP);

  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
