import React,{useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>
        <NavLink to={`/streamerhome/${title.replace(/\s+/g, '').toLowerCase()}`}>{title}</NavLink>
    </li>
  );

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-10">
        {["Home", "Revenue History","Stream"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className={`z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} className='cursor-pointer' /></li>
            {["Home","Revenue History","Stream"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
    
  )
}

export default Navbar
