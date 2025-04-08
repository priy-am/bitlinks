import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 text-white flex items-center justify-between px-10'>
        <div className="logo font-bold text-2xl ">
        <Link href={"/home"}> BitLinks </Link>
          </div>
        <ul className="flex space-x-10 justify-center items-center">
            <Link href={"/home"}> <li>Home</li></Link>
            <Link href={"/about"}> <li>About</li></Link>
            <Link href={"/shorten"}> <li>Shorten</li></Link>
            <Link href={"/contact"}> <li>Contact us</li></Link>
            <li className='flex space-x-5'>
            <Link href={"/shorten"}> <button className='bg-purple-500 shadow-lg rounded-lg px-5 py-2 hover:bg-purple-400' >Try Now</button> </Link>
            <Link href={"/github"}> <button className='bg-purple-500 shadow-lg rounded-lg px-5 py-2 hover:bg-purple-400' >GitHub</button> </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
