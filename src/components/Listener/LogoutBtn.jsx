import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import "../../styles/Listener/LogoutBtn.css"

function LogoutBtn() {

    let navigate = useNavigate();

    const logOut = () => {
        let path = '/signin';
        navigate(path);
    }
    return (
        <button onClick={logOut} className="logout-button flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="logout-content relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <span className="mr-1">LOGOUT</span><IoLogOutOutline />
            </span>
        </button>
    )
}

export default LogoutBtn