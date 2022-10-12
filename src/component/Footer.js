import React from 'react'
import Grid from '@mui/material/Grid';
import '../css/footer.css'
const Footer = () => {
  return (
    <>
       <footer>
      <Grid container spacing={2} style={{padding:"35px"}}>
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <ul>
        <li>info@kainskep.com</li>
        <li>+91-9509101669</li>
        <li> 44, Ayodhya Colony, Hira Nagar, Ajmer Rd, opp. Chitrakoot,       Jaipur, Rajasthan 302021</li>
      
      </ul>
    </Grid>
    <Grid item lg={4} md={4} sm={6} xs={12}>
    <ul>
        <li>info@kainskep.com</li>
        <li>+91-9509101669</li>
        <li> 44, Ayodhya Colony, Hira Nagar, Ajmer Rd, opp. Chitrakoot,       Jaipur, Rajasthan 302021</li>
      
      </ul>
    </Grid>
    <Grid item lg={4} md={4} sm={6} xs={12}>
    <ul>
        <li>info@kainskep.com</li>
        <li>+91-9509101669</li>
        <li> 44, Ayodhya Colony, Hira Nagar, Ajmer Rd, opp. Chitrakoot,       Jaipur, Rajasthan 302021</li>
      
      </ul>
    </Grid>
   </Grid>
   </footer>
   <div className='text-center footer_under'>© 2022 Kainskep Solutions</div>
    </>

  )
}

export default Footer