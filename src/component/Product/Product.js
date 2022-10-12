import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions} from '@mui/material';
import '../../css/Product/Product.css'
const Product = () => {
  return (
    <>
  
<div className="product_content_section">
    <div className='product_content_heading'>
   <p>Disengaged employees can hurt your business, big time. They may be costing your company more money than you think. We built Empcare because we know that when you appreciate and take care of your employees, they'll take care of your business.</p>
    </div>
<div className="product_card_component">
<Card sx={{ maxWidth:345,height:"400px",padding:"12px"}}>
<CardMedia
   component="img"
   height="150"
   image="product_card_image.png"
   alt="Paella dish"
 />
 <CardContent>
  <h3 className='card_heading'>Cloud Data Service </h3>
  <p className='card_para'>At Kainskep Solutions, we understand the significance of data in today’s digital world and we offer extensive Cloud Data Services.</p>
 </CardContent>
 <CardActions>
   <button>action</button>
   </CardActions>
</Card>
</div>
</div>
   
  
    </>
   
  )
}

export default Product