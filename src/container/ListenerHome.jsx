import React from "react";
import { LiveCard } from "../components"
import { SearchBar } from "../components"
import { SideBar } from "../components"
import { LogoutBtn } from "../components"
import "../styles/ListenerHome.css"


export default function ListenerHome() {
    return (
        <div className=" ListBody relative h-screen overflow-auto gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <SideBar />
            <div className="main">
                <LogoutBtn />
                <div className="sec-part">
                    <p className="greet">Good Morning!</p>
                    <SearchBar />
                </div>
                <p className="streamingNowtext">Streaming Now</p>
                <div className="cards">
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>
                    <div className="live-card">
                        <LiveCard />
                    </div>

                </div>
            </div>
        </div>
    )
}
