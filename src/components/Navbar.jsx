import React from 'react'
import '../styles/navbar.css';
import Sidebar from '../components/Sidebar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1 className='logo'>Coffee<span>World</span></h1>
            <div className='nav-links'>
                <a href='#'>Gift</a>
                <a href='#'>Login</a>
                <a href='#'>Cart</a>
            </div>
         <div className='side'>
            <Sidebar/>
         </div>
           


        </div>
    )
}
