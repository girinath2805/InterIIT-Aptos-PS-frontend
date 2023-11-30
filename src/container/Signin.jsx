import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IoWalletOutline } from "react-icons/io5";
import { Bars } from 'react-loader-spinner'

const defaultTheme = createTheme();

const Signin = () => {

  const [isconnecting, setIsconnecting] = useState(false)
  const navigate = useNavigate()

  const connectWallet = async () => {
    const getAptosWallet = () => {
      if ('aptos' in window) {
        return window.aptos;
      } else {
        alert('Petra wallet is not installed !')
        window.open('https://petra.app/');
      }
    };
    const wallet = getAptosWallet();
    localStorage.setItem('wallet', wallet); // { address: string, address: string }


    setIsconnecting(true)
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      console.log(account);
      localStorage.setItem('address', account.address); // { address: string, address: string }
      localStorage.setItem('address', account.address); // { address: string, address: string }

    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
    setIsconnecting(false)
    navigate('/streamerhome/home', { replace: true });
  }

  const handleSignin = (() => {
    connectWallet();
  })

  return (
    <div className='flex justify-center  gradient-bg-welcome w-screen h-screen'>
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl flex items-center justify-center px-5 my-auto py-6">

        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginY: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className='text-white'>
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {!isconnecting && <Button
                  onClick={handleSignin}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className='flex flex-row gap-2'
                >
                  Connect Wallet
                  <IoWalletOutline fontSize={21} />
                </Button>}
                {isconnecting && <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 , cursor:"default"}}
                  className='flex flex-row gap-2'
                  
                >
                  Connecting
                  <Bars
                    height="25"
                    width="20"
                    color="#fff"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </Button>}
                <Grid container className='flex justify-center text-center'>
                  <Grid item>
                    <Link href="signup" variant="body2">
                      {"New to here? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Signin
