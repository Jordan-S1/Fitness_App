import React from 'react'
import logo from '@/assets/logo.png'
import {FaUser} from 'react-icons/fa6'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
      <Image src={logo} alt="Logo"/>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'><FaUser/></Link>
      <button>Sign Out</button>
    </nav>
  )
}

export default Navbar