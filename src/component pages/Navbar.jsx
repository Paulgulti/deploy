import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link><br/>
        <Link to="/product">Product</Link>
        <Outlet/>
    </div>
  )
}

export default Navbar
