
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import '../css/Header.css'
import Image_Section from './Image_Section'
import {
NavLink
} from "react-router-dom";
const Header = () => {
  return (
  <>
 
       <AppBar sx={{background:"white"}}>
        <Toolbar>
            <div className="logo">
                <img src="download (1).png" alt="" className='kainskep_logo'/>
            </div>
            <nav className='navigation'>
          <ul className="list">
            <li className="list_items">
            <NavLink to="/"> Home</NavLink>
             </li>
            <li className="list_items services_list">
            <NavLink to="/service"> Services</NavLink>
        <ul class="dropdown">
           <li>
            <a href="#">Web Development</a></li>
           <li><a href="#">Web Design</a></li>
          <li><a href="#">Illustration</a></li>
           <li><a href="#">Iconography</a></li>
      </ul>
            </li>
            <li className="list_items">
             <NavLink to="/product">Products</NavLink>
          </li>
          </ul>
            </nav>
        </Toolbar>
       </AppBar>
      <Image_Section/>
       </>


  )
}

export default Header