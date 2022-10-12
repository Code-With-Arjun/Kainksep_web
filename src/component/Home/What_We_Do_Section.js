import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions, Grid } from '@mui/material';
import { Container } from '@mui/system';


const What_We_Do_Section = () => {
  return (
   <>
   <div className="what_we_do_section">
    <h3 className='text-center'>What We Do?</h3>
   <Grid container spacing={2} style={{padding:"35px"}}>
    <Grid item lg={4}>
    <Card sx={{ maxWidth:345,height:"400px",padding:"12px"}}>
      <CardContent>
       <h3 className='card_heading'>Cloud Data Service </h3>
       <p className='card_para'>At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Cloud Data Services.</p>
      </CardContent>
      <CardActions>
        <button>action</button>
        </CardActions>
    </Card>
    </Grid>
    <Grid item lg={4}>
    <Card sx={{ maxWidth: 345,height:"400px" }}>
      <CardContent>
       <h3 className='card_heading'>Cloud Data Service </h3>
       <p className='card_para'>At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Cloud Data Services.</p>
      </CardContent>
      <CardActions>
        <button>action</button>
        </CardActions>
    </Card>
    </Grid>
    <Grid item lg={4}>
    <Card sx={{ maxWidth: 345,height:"400px" }}>
      <CardContent>
       <h3 className='card_heading'>Cloud Data Service </h3>
       <p className='card_para'>At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Cloud Data Services.</p>
      </CardContent>
      <CardActions>
        <button>action</button>
        </CardActions>
    </Card>
    </Grid>
   </Grid>
   
   </div>
   
   </>
  )
}

export default What_We_Do_Section