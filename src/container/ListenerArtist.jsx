import React from "react";
import { SideBar } from "../components";
import { LogoutBtn } from "../components"
import { ArtistPanel } from "../components"
import "../styles/ListenerArtist.css"

export default function ListenerArtist() {
    return (
        <div className=" ListBody relative h-screen overflow-auto gradient-bg-welcome bg-scroll pt-2 pb-2.5">
            <SideBar />
            <div className="main">
                <LogoutBtn />
                <ArtistPanel />
            </div>
        </div>
    )
}