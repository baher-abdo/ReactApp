import React, { useState } from "react";
import { NavLink} from "react-router-dom";



export default function Navbar() {
  const [opneMenu, setOpneMenu] = useState(false)
  const [animatNav, setAnimatNav] = useState(false)

  function setEffict() {
    if (window.scrollY >= 88) {
      setAnimatNav(true)
    } else {
      setAnimatNav(false)
    }
  }

window.addEventListener("scroll", setEffict)

  return (
    <>
      <nav className={`border-gray-20 bg-slate-800 fixed top-0 left-0 right-0 z-30 ${animatNav? '':'py-5'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="" className="flex items-center space-x-3 rtl:space-x-reverse"><h1 className="self-center text-3xl font-bold whitespace-nowrap">START FRAMEWORK</h1></NavLink>
          <button onClick={()=>{setOpneMenu(!opneMenu)}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
          <div className={`w-full md:block md:w-auto ${opneMenu? '':'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0">
              <li><NavLink to="/about" className="block py-2 px-3 rounded-lg md:bg-transparent md:py-1 md:px-3" aria-current="page">ABOUT</NavLink></li>
              <li><NavLink to="/portfolio" className="block py-2 px-3 rounded-lg md:bg-transparent md:py-1 md:px-3" aria-current="page">PORTFOLIO</NavLink></li>
              <li><NavLink to="/contact" className="block py-2 px-3 rounded-lg md:bg-transparent md:py-1 md:px-3" aria-current="page">CONTACT</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
