import React from 'react'
import { SlUserFollowing } from "react-icons/sl";
import "../styles/SideBar.css"
import { display } from '@mui/system';

function SideBar() {
    return (
        <div className="side-bar">
            <div className="profile blue-glassmorphism" >
                <p>This is profile</p>
            </div>
            <div className="break"></div>
            <div className="following blue-glassmorphism ">
                <div className="following-title"><SlUserFollowing className="mr-2" />Following</div>
                <hr className="h-0.5 border-none bg-gray-500 ml-3 mr-2" />
                <div className="fol-artists">
                    <div className="following-artist">
                        <div className="artist">
                            <img className="artist-img" src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="" />
                            <span className={`artist-name ${true ? 'visible' : 'invisible'}`}>Anirudh Ravichandran</span>
                        </div>
                        <div>Live</div>
                    </div>
                    <div className="following-artist">
                        <div className="artist">
                            <img className="artist-img" src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="" />
                            <span className="artist-name">Anirudh Ravichandran</span>
                        </div>
                        <div>Live</div>
                    </div>
                    <div className="following-artist">
                        <div className="artist">
                            <img className="artist-img" src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="" />
                            <span className="artist-name">Anirudh Ravichandran</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                            <span>Live</span>
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default SideBar