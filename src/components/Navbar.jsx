import React, { useState, useEffect, useRef } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineContentCopy } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Wallet } from '@mui/icons-material';
import logo from '../assets/logo.svg'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <NavLink to={`/streamerhome/${title.replace(/\s+/g, '').toLowerCase()}`} className={({ isActive }) => (isActive ? 'font-bold text-xl ease-in transform transition duration-500 scale-110 text-blue-500' : 'inactive-link text-grey transform transition duration-500 hover:scale-110 hover:text-blue-500 ease-in')}
      onClick={(e) => {
        if (e.currentTarget.getAttribute("href") === window.location.pathname) {
          e.preventDefault();
        }
      }}>{title}
    </NavLink>
  </li>
);



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showdropdown, setShowdropdown] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate()

  const address = localStorage.getItem('address'); // get the local storage item
  const wallet = localStorage.getItem('wallet'); // get the local storage item

  const shortAddress = address && `${address.substring(0, 12)}...`;

  const handleDisconnect = async() => {
    try {
      await wallet.disconnect
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
    localStorage.clear();
    navigate('/signin', { replace: true });
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
        setCopySuccess('');
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  }

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 black-glassmorphism font-head">
       <div className="absolute md:flex hidden left-2 items-center">
        <img src={logo} alt="logo" className="cursor-pointer w-23 h-[5rem] color-white" />
        <span className='items-center text-white text-xl'>VibeChain</span>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-10">
        {["Home", "Revenue History", "Stream"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className='absolute right-4 md:flex hidden text-white items-center font-nav'>
        <span className='mx-3'>6.5 APT</span>
        <div className='relative' ref={dropdownRef}>
          <CgProfile fontSize={28} color='grey' className='cursor-pointer' onClick={() => setShowdropdown(!showdropdown)} />
          {showdropdown && (
            <div className='absolute right-0 mt-2 flex flex-row'>
              {copySuccess && <span className='flex mr-3 mt-2.5 gap-1 h-min white-glassmorphism text-black rounded-xl p-1 px-2 cursor-pointer' onMouseLeave={() => setCopySuccess('')} onClick={() => copyToClipboard(address)}><MdOutlineContentCopy fontSize={20} className='mt-1' />{copySuccess}</span>}
              <ul className=' w-48 white-glassmorphism rounded-md shadow-lg py-2 text-black z-10'>
                <li className='text-sm px-4 py-2 hover:bg-gray-200' onMouseEnter={() => setCopySuccess('Copy')} onClick={() => copyToClipboard(address)}
                  onMouseLeave={() => {
                    if (copySuccess === 'Copied!') {
                      setCopySuccess('')
                    }
                  }} style={{ cursor: copySuccess === 'Copied!' ? 'default' : 'pointer' }}>
                  <span>{shortAddress}</span>
                </li>
                <li className='cursor-pointer px-4 py-2 hover:bg-gray-200'>Update Profile</li>  
                <li className='cursor-pointer px-4 py-2 hover:bg-gray-200' onClick={handleDisconnect}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>


      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className={`z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}
          >
            {["Home", "Revenue History", "Stream"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
            <div className='absolute flex flex-col bottom-9 left-3 gap-4 font-nav'>
              <span className='mx-2'>6.5 APT</span>
              <div className='flex flex-row gap-6 items-center'>
                <div className='relative flex flex-row items-center gap-3' ref={dropdownRef}>
                  <CgProfile fontSize={28} color='white' className='cursor-pointer' onClick={() => setShowdropdown(!showdropdown)} />

                  {showdropdown && (
                    <div className='absolute bottom-[2rem] flex flex-row'>
                      <ul className=' w-48 white-glassmorphism rounded-md shadow-lg py-2 text-black z-10'>
                        <li className='cursor-pointer px-4 py-2 hover:bg-gray-200'>Update Profile</li>
                        <li className='cursor-pointer px-4 py-2 hover:bg-gray-200' onClick={handleDisconnect}>Logout</li>
                      </ul>
                    </div>
                  )}
                  <span onMouseEnter={() => setCopySuccess('Copy')} onMouseLeave={() => setCopySuccess('')} onClick={() => copyToClipboard(address)} style={{ cursor: copySuccess === 'Copied!' ? 'default' : 'pointer' }}>{shortAddress}</span>
                </div>
                {copySuccess && <span className='flex gap-1 h-min white-glassmorphism text-black rounded-xl p-0.5 px-2'><MdOutlineContentCopy fontSize={20} className='mt-1' />{copySuccess}</span>}
              </div>

            </div>

          </ul>

        )}
      </div>
    </nav>

  )
}

export default Navbar
