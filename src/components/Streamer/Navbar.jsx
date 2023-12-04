import React, { useState, useEffect, useRef } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import { Snackbar, Button, Grid } from '@mui/material';
import SnackbarContent from '@mui/material/SnackbarContent';
import { IoWalletOutline } from 'react-icons/io5';



const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <NavLink to={`/streamer/${title.replace(/\s+/g, '').toLowerCase()}`} className={({ isActive }) => (isActive ? 'font-bold text-xl ease-in transform transition duration-500 scale-110 text-blue-500' : 'inactive-link text-grey transform transition duration-500 hover:scale-110 hover:text-blue-500 ease-in')}
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
  const [copySuccess, setCopySuccess] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate()
  const sidebarRef = useRef(null);
  const snackbarRef = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const address = localStorage.getItem('address'); // get the local storage item
  const wallet = localStorage.getItem('wallet'); // get the local storage item


  const handleDisconnect = async () => {
    try {
      await wallet.disconnect
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
    localStorage.clear();
    navigate('/signin', { replace: true });
  }

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopySuccess('Copied!');
      setSnackbarMessage('Copied to clipboard!');
      setSnackbarOpen(true);
    } catch (err) {
      setCopySuccess('Failed to copy!');
      setSnackbarMessage('Failed to copy to clipboard!');
      setSnackbarOpen(true);
    }
  };

  const copyToClipboard = () => {
    // You can use this function for other menu items if needed
    // For now, it is only used for the address menu bar
    copyAddressToClipboard();
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Exclude the menu button, close button, and NavLink from closing the sidebar
      const isMenuButton = event.target.classList.contains('menu-button');
      const isCloseButton = event.target.classList.contains('close-button');
      const isNavLink = event.target.tagName === 'A' && event.target.getAttribute('href');

      if (!isMenuButton && !isCloseButton && !isNavLink && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleMenu]);

  useEffect(() => {
    const handleWheel = () => {
      // Close the sidebar when the user starts scrolling down
      if (toggleMenu && window.scrollY > 0) {
        setToggleMenu(false);
      }
    };

    // Add event listener for wheel events
    window.addEventListener('wheel', handleWheel);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [toggleMenu]);


  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the snackbar if the click is outside of it
      if (!snackbarRef.current || !snackbarRef.current.contains(event.target)) {
        setSnackbarOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [snackbarOpen]); // Make sure to include snackbarOpen in the dependencies array




  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 black-glassmorphism font-head z-1200">
      <div className="absolute md:flex hidden -left-2 items-center cursor-pointer ">
        <img src={logo} alt="logo" className="cursor-pointer h-[5rem] color-white" />
        <span className='items-center text-white text-xl'>VibeChain</span>
      </div>
      <div className="md:hidden flex items-center cursor-pointer " style={{ position: 'absolute', left: '45%', transform: 'translateX(-50%)' }}>
        <img src={logo} alt="logo" className="cursor-pointer h-[5rem] color-white" />
        <span className='items-center text-white text-xl'>VibeChain</span>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-10">
        {["Home", "Revenue History", "Stream"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
      </ul>
      {address ? (
        <div className='absolute right-4 flex flex-row text-white items-center font-nav'>
          <span className='md:mx-0 -mx-3 md:text-lg text-sm'>6.5 APT</span>
          <div className='relative'>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}><CgProfile fontSize={27} color='black' /></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={copyToClipboard}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Address
              </MenuItem>
              <MenuItem onClick={handleDisconnect}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
          {copySuccess && (
            <div className='flex absolute my-4 mx-4 w-min'>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                ref={snackbarRef}
                style={{ top: '70px', right: '20px' }}
              >
                <SnackbarContent
                  message={snackbarMessage}
                  style={{
                    backgroundColor: copySuccess === 'Copied!' ? '#4CAF50' : '#F44336',
                  }}
                />
              </Snackbar>
            </div>
          )}
        </div>
      ) : (
        <div className='absolute right-4 flex flex-row text-white items-center font-nav'>
          <Grid item>
            <Button
              href='/signin'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className='flex flex-row gap-2'
              
            >
              Connect Wallet
              <IoWalletOutline fontSize={21} />
            </Button>
          </Grid>
        </div>
      )}

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer menu-button"
            onClick={() => setToggleMenu(true)}
          />

        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer close-button"
            onClick={() => setToggleMenu(false)}
          />

        )}
      </div>
      {toggleMenu && (
        <ul ref={sidebarRef}
          className={`z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
    flex flex-col justify-start items-end rounded-md blue-glassmorphism-1 text-white ${toggleMenu ? 'animate-slide-in' : 'animate-slide-out'}`}
        >
          {["Home", "Revenue History", "Stream"].map(
            (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
          )}
        </ul>
      )}
    </nav>
  )
}
export default Navbar