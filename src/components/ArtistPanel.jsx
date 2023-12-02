import React from 'react'
import "../styles/ArtistPanel.css"



function ArtistPanel() {
    return (
        <>
            <div className='panel blue-glassmorphism-artist-panel'>
                <img className='artist-img-panel' src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="img" />
                <div>
                    <div className='panel-descript'>
                        <div className='panel-artist-text'>Artist</div>
                        <div className='panel-artist-name'>HipHopTamizhaohfi</div>
                    </div>
                    <div className='followers'>
                        1.2M Followers
                    </div>
                </div>
                <div className="absolute flex items-center right-3 top-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-white md:text-xl">Live</span>
                </div>
            </div>
        </>
    );
}

export default ArtistPanel