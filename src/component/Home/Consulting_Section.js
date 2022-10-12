import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
const Consulting_Section = () => {
  return (
    <div className="consulting_section">
      <Container>
    <Grid container spacing={2} justifyContent="space-evenly">
    <Grid item xs={12} lg={6}  md={6}>
    <h3>Why our Consulting?</h3>
     <p>We aim to have happy, satisfied customers and we strongly believe: “Leave your technology to us while you keep doing what you do best - running your business!”</p>
    <div className="button">
    <Button variant="contained" className='btn' color="secondary">Our Products</Button>
    </div>
    </Grid>
    <Grid item xs={12} lg={6}  md={6}>
     <img src="consult.png" alt="" className='consult_image'/>
    </Grid>
    </Grid>
    </Container>
    </div>
  )
}

export default Consulting_Section