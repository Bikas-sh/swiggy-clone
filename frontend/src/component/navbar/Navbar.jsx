import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const [menu,setmenu]=useState('home')
    return (
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} alt="" className="logo" /> </Link> 
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setmenu('home')} className={menu==='home'?'active':''}>Home</Link>
                <a href='#explore-menu' onClick={()=>setmenu('menu')} className={menu==='menu'?'active':""}>Menu</a>
                <a href='#app-download' onClick={()=>setmenu('mobile-app')} className={menu==='mobile-app'?'active':""}>Mobile-app</a>
                <a href='#footer'       onClick={()=>setmenu('contact-us')} className={menu==='contact-us'?'active':""}>Contact-us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className="search-icon" />
                <div className="navbar-search-icon">
                <Link to='/cart' ><img src={assets.basket_icon} alt="" /></Link>    
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)} >sign in</button>

            </div>


        </div>
    )
}

export default Navbar;
