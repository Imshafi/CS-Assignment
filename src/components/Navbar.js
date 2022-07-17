import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <a href="#">App Logo</a>
            <a href="#">Input Field</a>
            <a href="#">Login/Signup</a>
            <a href="#">My orders</a>
            <a href="#">Contact Us</a>
        </ul>

        <div className="search">
          <form>
            <input type="text" placeholder='Search..'></input>
            <button>Search</button>
          </form>
        </div>
    </div>
  )
}

export default Navbar