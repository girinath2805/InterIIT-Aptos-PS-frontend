import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Signup = () => {
  const [signer, setSigner] = useState('')
  const [pfp, setPfp] = useState()
  const [firstName, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [match,setMatch] = useState(true)


  const defaultTheme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  useEffect(() => {
    if (password == confirmpassword){
      setMatch(true)
    }
    else{
      setMatch(false)
    }
  },[confirmpassword])

  

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
  
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      setSigner(account)
      console.log(signer.address); // { address: string, address: string }
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
  }

  const handleSignup = (() => {
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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" className='text-white'>
                Streamer Sign up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="off"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }

                      }}
                      autoFocus
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="off"
                      onChange={(e) => setLastname(e.target.value)}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      name="userName"
                      autoComplete="off"
                      onChange={(e) => setLastname(e.target.value)}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      InputLabelProps={{
                        style: { color: 'gray' },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="confirmPassword"
                      id="password"
                      autoComplete="off"
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      InputLabelProps={{
                        style: { color: 'grey' },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "gray", borderWidth: "2px" },
                        },
                        "& .MuiInputBase-root": {
                          color: 'white'
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: "white"
                          }
                        }
                      }}
                    />
                  </Grid>
                  {!match && <span className='text-red-700 flex ml-5'>Password doesn't match</span>}
                </Grid>
                <Button
                  onClick={handleSignup}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="signin" variant="body2">
                      Already have an account? Sign in
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

export default Signup
