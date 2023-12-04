import React from 'react'
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumIcon from '@mui/icons-material/Forum';

import MusicPlayer from './musicPlayer';
import SongRow from "./SongRow"
import appIcon from "../../assets/logo.svg"
import "../../styles/Listener/SideBar.css"


const HomeIcon = styled(HomeOutlinedIcon)({
    fontSize: 30,

});

function SideBar() {
    let navigate = useNavigate();

    const routeHome = () => {
        let path = '/listener/home';
        navigate(path);
    }
    return (
        <div className="side-bar">
            <div className="profile blue-glassmorphism-sidebar" >
                <div className='appTitle'>
                    <img src={appIcon} alt="appIcon" />
                    <div>Vibe Chain</div>
                </div>
                <div className="home" onClick={routeHome}>
                    <HomeIcon />
                    <span className="home-text">Home</span>
                </div>
                <div className="forum">
                    <ForumIcon />
                    <span className="forum-text">Forum</span>
                </div>
                <div className='mt-8'><MusicPlayer /></div>
            </div>
            <div className="break"></div>
            <div className="following blue-glassmorphism-sidebar ">
                <div className="following-title"><CheckIcon className="mr-2" />Songs Purchased</div>
                <hr className="h-0.5 border-none bg-gray-500 ml-3 mr-2" />
                <div className="fol-artists">
                    <SongRow song={"song1"} />
                    <SongRow song={"song2"} />
                    <SongRow song={"song3"} />
                    <SongRow song={"song4"} />
                    <SongRow song={"song5"} />
                    <SongRow song={"song6"} />
                    <SongRow song={"song7"} />
                    <SongRow song={"song8"} />
                </div>
            </div>
        </div>
    )
}

export default SideBar