import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { LiveCard } from "../components"
import { SearchBar } from "../components"
import "../styles/ListenerHome.css"

export default function ListenerHome() {
    return (
        <div className="relative h-screen overflow-auto gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <div className="side-bar">
                <div className="profile">
                    <p>This is profile</p>
                </div>
                <div className="break"></div>
                <div className="following">
                    <p>Artists</p>
                </div>
            </div>
            <div className="main">
                <button class="logout-button flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span class="logout-content relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <span className="mr-1">LOGOUT</span><IoLogOutOutline />
                    </span>
                </button>
                <div className="sec-part">
                    <div>
                        <p className="greet">Good Morning!</p>
                        <p className="greet-name">User Name</p>
                    </div>

                    <SearchBar />
                </div>
                <p>Streaming Now </p>
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
