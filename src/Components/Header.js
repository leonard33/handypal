import React from 'react'
import  './Header.css'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from 'react-router-dom';



function Header() {
  
  return (
    <div className='header'>
      <Link to='/'style={{color: 'inherit', textDecoration: 'inherit'}}>
       <div className='logo' >
         
           <img src='https://i.pinimg.com/474x/ed/5d/aa/ed5daaae88419ddddf87b2b4cb69a66e.jpg' alt=''/>
         
       </div>
       </Link>
       <div className='search_bar'>
           <input className='search' type="search" placeholder="Search"/>
           <SearchIcon className='search_icon'/>
       </div>
       <div className='right_section'>
        <p>Become a worker</p>
         <LanguageOutlinedIcon/>
         <ExpandMoreOutlinedIcon/>
         <Avatar/>
       </div>
     </div>
  )
}

export default Header