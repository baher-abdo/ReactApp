import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function Layouut() {
  return (
      <>
          <Navbar />
            <Outlet />
        <Footer/>
      </>
  )
}
