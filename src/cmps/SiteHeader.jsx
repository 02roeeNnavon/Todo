import React from 'react'
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <nav className='text-center bg-dark py-2'>
        <Link to='/' className='btn btn-primary me-2'>Todo List</Link>
        <Link to='/About' className='btn btn-primary'>About</Link>
    </nav>
  )
}
