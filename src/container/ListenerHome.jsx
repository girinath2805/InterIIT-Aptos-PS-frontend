import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { SlUserFollowing } from "react-icons/sl";
import { LiveCard } from "../components"
import { SearchBar } from "../components"
import "../styles/ListenerHome.css"

export default function ListenerHome() {
    return (
        <div className=" ListBody relative h-screen overflow-auto gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <div className="side-bar">
                <div className="profile blue-glassmorphism" >
                    <p>This is profile</p>
                </div>
                <div className="break"></div>
                <div className="following blue-glassmorphism ">
                    <p className="following-title"><SlUserFollowing className="mr-2" />Following</p>
                    <div className="fol-artists">
                        <div className="following-artist">
                            <div className="artist">
                                <img className="artist-img" src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="" />
                                <span className="artist-name">Anirudh Ravichandran</span>
                            </div>
                            <div>Live</div>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="main">
                <button className="logout-button flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="logout-content relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <span className="mr-1">LOGOUT</span><IoLogOutOutline />
                    </span>
                </button>
                <div className="sec-part">
                    <p className="greet">Good Morning!</p>
                    <SearchBar />
                </div>
                <p className="streamingNowtext">Streaming Now</p>
                <div className="cards">
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div>
                        <LiveCard />
                    </div>
                    <div>
                        <LiveCard />
                    </div>
                    <div>
                        <LiveCard />
                    </div>

                </div>
            </div>
        </div>
    )
}
