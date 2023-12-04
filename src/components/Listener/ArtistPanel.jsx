import React from 'react'
import { Button } from '@mui/material';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import { useNavigate } from 'react-router-dom';
import "../../styles/Listener/ArtistPanel.css"

function ArtistPanel({ isLive }) {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/listener/livestream';
        navigate(path);
    }
    return (
        <>
            <div className="panel blue-glassmorphism-artist-panel rounded-b-none">
                <img className='artist-img-panel' src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="img" />
                <div className='components'>
                    <div className='panel-descript'>
                        <div className='panel-artist-text'>Artist</div>
                        <div className='panel-artist-name'>HipHopTamizhaohfijvhjv</div>
                    </div>
                </div>
                <div className="absolute flex items-center right-3 top-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-white md:text-xl">Live</span>
                </div>
                {isLive && <div className='listen-btn bottom-3 right-3'><Button variant="contained" onClick={routeChange} endIcon={<HeadsetOutlinedIcon />} >Listen</Button></div>}

            </div>
        </>
    );
}

export default ArtistPanel