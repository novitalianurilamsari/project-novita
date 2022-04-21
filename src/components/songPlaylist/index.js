import './style.css';
import data from '../../data/data';

const SongPlaylist = () => {
  return (
    <div>
        <div class='songPlaylist'>
            <img className='album-image' src={data.album.images[0].url} alt="album-cover"/>
            <p className='text-title' id="trackTitle">{data.name}</p>
            <p className='text-artist'>{data.album.artists[0].name}</p>
            <p className='text-album'>{data.album.name}</p>
            <button type='button' className='button-action' value='Select'> Select</button>
        </div>
    </div>
    );
  }

export default SongPlaylist;
