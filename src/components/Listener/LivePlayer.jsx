import React from 'react';
import { Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VolumeSlider from "./VolumeSlider"
import artistPhoto from "../../assets/artistPhoto.avif"
import "../../styles/Listener/LivePlayer.css"

export default function LivePlayer({ handleClickOpen }) {

  return (
    < div className="live-panel blue-glassmorphism-artist-panel">
      <img className='live-artist-img-panel' src={artistPhoto} alt="img" />
      <div className='components'>
        <div className='live-panel-descript'>
          <div className='live-panel-artist-text'>Artist</div>
          <div className='live-panel-artist-name'>HipHopTamizhaOffi</div>
        </div>
      </div>
      <div className="absolute flex items-center right-3 top-3">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
        <span className="text-white md:text-xl">Live</span>
      </div>
      <div className=' volume-slider mt-10'><VolumeSlider /></div>
      <div className='live-listen-btn bottom-3 right-3'><Button variant="contained" onClick={handleClickOpen} endIcon={<AttachMoneyIcon />} >Send Tips</Button></div>

    </div >
  );
}
