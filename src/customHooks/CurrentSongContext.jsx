import React, { useContext, useState } from 'react'

const CurrSongContext = React.createContext()
const CurrSongUpdateContext = React.createContext()

export function useCurrSong() {
    return useContext(CurrSongContext)
}
export function useCurrSongUpdate() {
    return useContext(CurrSongUpdateContext)
}

export function CurrentSongProvider({ children }) {

    const [currSong, setCurrSong] = useState(null)
    function updtSong(song) {
        setCurrSong(song)
    }
    return (
        <CurrSongContext.Provider value={currSong}>
            <CurrSongUpdateContext.Provider value={updtSong}>
                {children}
            </CurrSongUpdateContext.Provider>
        </CurrSongContext.Provider>
    )
}
