import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar px-10'  ><h1 className="text-4xl font-bold">Shopping App</h1>
    <ul class="list">
      <li><Link to="/"><i class="fa-solid fa-store"></i> Home</Link></li>
      <li><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Link></li>
      <li><Link to="/contact"><i class="fa-solid fa-envelope"></i> Contact</Link></li>
      <li><Link to="/signin"><i class="fa-solid fa-user"></i> Sign in</Link></li>
    </ul>
  </div>
  )
}

export default Navbar