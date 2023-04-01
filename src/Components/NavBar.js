import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../Components/NavBar.css';
import { MenuData } from './MenuData';
import { DiReact} from "react-icons/di";
import {GoThreeBars} from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

const NavBar = () => {
    const [isNavShowing, setIsNavShowing]=useState(false);
  return (
    <nav className='NavbarItems'>
        <h1 className='logo'>React<i className='direact'><DiReact/></i></h1>
        <div className='menu-icons'>
        <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(prev=> !prev)}>
          {
            isNavShowing ? <MdOutlineClose/>:  <GoThreeBars/>
          }
       </button>
        </div>
        <ul className={`nav-menu ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
            {
               MenuData.map((item,index)=>{
                return(
            <li key={index}>
                <NavLink to={item.path} href={item.url} className={item.cName}>
                    <i>{item.icon}</i>
                    {item.title} 
                    </NavLink>
            </li>
                )
               }) 
            }
            
        </ul>
    <div class="dropdown">
    <button class="dropbtn">Service
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
    </nav>
  )
}

export default NavBar