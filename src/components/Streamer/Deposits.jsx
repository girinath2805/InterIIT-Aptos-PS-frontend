import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';


const Deposits = () => {
  return (
    <React.Fragment>
      <Title>Total Revenue Generated</Title>
      <Typography component="p" variant="h4">
        0.5 APT 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Last updated 15 March, 2019
      </Typography>
      <div>
      </div>
    </React.Fragment>
  )
}

export default Deposits
