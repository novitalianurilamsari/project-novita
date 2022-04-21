import './style.css';
import data from '../../data/data';

const SongPlaylist = () => {
    const renderTracks = data =>
    data
      .map(track => 
        <div className='song-item' key={track.id}>
        <div class='song-playlist'>
        <img src={track.album.images[1].url} alt={track.name} className='album-image'/>
                <div className='song-info'>
                    <h2 className='text-title'>{track.name}</h2>
                    <h3 className='text-artist'>{track.artists[0].name}</h3>
                    <h3 className='text-album'>{track.album.name}</h3>
                </div>
                <form target='_blank' action={track.external_urls.spotify}>
                    <button type='submit' className='button-action'>Select</button>
                </form>
            </div>
        </div>);

    return (
        <div className='song-container'>
            {renderTracks(data)}
        </div>
    );
}

export default SongPlaylist;
