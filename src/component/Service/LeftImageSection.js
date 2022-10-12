import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const LeftImageSection = ({val}) => {
    console.log(val.order1,val.order2)
  return (
    <>
    <div style={{margin:"30px 0"}} >
    <Grid container  justifyContent="space-evenly">

        <Grid item lg={4} md={6} sm={6} xs={6} order={val.order1}>
            <img src={val.img} alt="" className='service_image'/>
        </Grid>
        <Grid item lg={8} md={6} sm={6} xs={6} style={{textAlign:"justify"}} order={val.order2}>
            <div className='service_text_section'>
       <h1>{val.heading}</h1>
       <p>{val.content}</p>

            </div>
       {/* <button>learn more</button> */}
        </Grid>
    </Grid>

    </div>
    {/* <img src="1.png" alt="" /> */}
    
    </>
  )
}

export default LeftImageSection