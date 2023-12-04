import React from "react";
import { SideBar } from "../../components";
import { LogoutBtn } from "../../components"
import { ArtistPanel } from "../../components"
import { SongRow } from "../../components"
import "../../styles/Listener/ListenerArtist.css"

export default function ListenerArtist() {
    const isLive = true
    return (
        <div className=" ListBody relative h-screen overflow-y-auto overflow-x-hidden gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <SideBar />
            <div className="main">
                <LogoutBtn />
                <ArtistPanel isLive={isLive} />
                <div className="disp-songs blue-glassmorphism-songs rounded-t-none">
                    <SongRow song={"song4"} />
                    <SongRow song={"song10"} />
                    <SongRow song={"song11"} />
                    <SongRow song={"song12"} />
                    <SongRow song={"song8"} />
                </div>
            </div>
        </div>
    )
}