import React from "react";
import { LiveCard } from "../components"
import { SearchBar } from "../components"
import { SideBar } from "../components"
import { LogoutBtn } from "../components"
import "../styles/ListenerHome.css"


export default function ListenerHome() {
    const date = new Date()
    let hours = date.getHours()
    let greet = "Enjoy Music!"
    if (hours <= 11){
        greet = "Good Morning!"
    }
    else if (hours <=15){
        greet = "Good Afternoon"
    }
    else if(hours < 19){
        greet = "Good Evening"
    }

    return (
        <div className=" ListBody relative h-screen overflow-y-auto overflow-x-hidden gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <SideBar />
            <div className="main">
                <LogoutBtn />
                <div className="sec-part">
                    <p className="greet">{greet}</p>
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
