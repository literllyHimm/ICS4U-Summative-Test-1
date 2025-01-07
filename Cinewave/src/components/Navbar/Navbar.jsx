import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-left"></div>
      <img src= {logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV Show</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Launguages  </li>
      </ul>
      <div className="navbar-rigth"></div>
      <img src= {search_icon} alt="" className='icons'/>
      <p>Children</p>
      <img src= {search_icon} alt="" className='icons'/>
    </div>
  )
}

export default Navbar
