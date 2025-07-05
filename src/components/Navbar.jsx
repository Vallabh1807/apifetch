import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between gap-20 items-center bg-fuchsia-200 py-1 shadow text-md font-mono px-8'>
    
    <NavLink to="/"><h1 className='text-2xl font-bold text-fuchsia-950 font-serif'>ZARE</h1></NavLink>
    
    <nav className='flex gap-15  ' >
        <NavLink className={({isActive})=>isActive
            ? "text-fuchsia-950 border-b-2 border-fuchsia-950 pb-1"
            : "text-gray-600 hover:text-fuchsia-950  pb-1"} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive
            ? "text-fuchsia-950  border-b-2 border-fuchsia-950  pb-1"
            : "text-gray-600 hover:text-fuchsia-950  pb-1"} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive
            ? "text-fuchsia-950  border-b-2 border-fuchsia-950  pb-1"
            : "text-gray-600 hover:text-fuchsia-950  pb-1"} to="/products">Products</NavLink>
        <NavLink className={({isActive})=>isActive
            ? "text-fuchsia-950  border-b-2 border-fuchsia-950  pb-1"
            : "text-gray-600 hover:text-fuchsia-950  pb-1"} to="/create-product">Create</NavLink>
        
    </nav>
    <input type="text" className='border-1 rounded w-100 px-5' placeholder='Search Product' />
    </div>

    </>
  )
}

export default Navbar