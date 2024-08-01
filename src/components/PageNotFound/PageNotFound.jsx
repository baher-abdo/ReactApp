import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
    <div className="bg-gray-100 flex h-screen items-center justify-center">
  <div className="flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
      <NavLink to="" className="mt-4 text-xl text-teal-600 hover:underline">Go back home</NavLink>
  </div>
  </div>
    </>
)
}
