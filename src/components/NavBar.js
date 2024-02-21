import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul className=' flex justify-evenly my-10'>
            <Link to="/">
            <li>
                All Products
            </li>
            </Link>
            <Link to="/add">
            <li>
                Add Product
            </li>
            </Link>
            
            
        </ul>
      
    </div>
  )
}

export default NavBar
