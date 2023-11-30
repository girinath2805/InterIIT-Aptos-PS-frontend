import React from 'react'
import "../styles/ArtistPanel.css"



function ArtistPanel() {
    return (
        <div className= ' panel blue-glassmorphism-border'>
            <img className='artist-img-panel' src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320" alt="img" />
            <div>
                <div>
                    artist Name
                </div>
                <div>
                    Followers
                </div>
            </div>

        </div>
    );
}

export default ArtistPanel