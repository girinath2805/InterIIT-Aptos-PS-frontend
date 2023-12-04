import { React, useState, useEffect } from 'react'
import { Audio } from 'react-loader-spinner'
import { useCurrSong, useCurrSongUpdate } from '../../customHooks/CurrentSongContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "../../styles/Listener/SongRow.css"

function SongRow({ song }) {
  const currSong = useCurrSong()
  const updtSong = useCurrSongUpdate()
  // const audio = new Audio(songLink)
  const isPlaying = currSong === song
  function handleClick() {
    if (isPlaying) {
      updtSong(null)
    }
    else {
      updtSong(song)
    }
  }

  return (
    <div className="songRow" onClick={handleClick}>
      <div className="songRow__album mt-3 " >{isPlaying ? <Audio
        height="25"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      /> : <PlayArrowIcon />} </div>
      <div className="songRow__info">
        <h1>TrackManabfaiugfausdbfu</h1>
        <p>
          Hiphoptamizhafasd
        </p>
      </div>
      <div className='time'>time</div>
    </div>
  );
}

export default SongRow