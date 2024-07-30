import React from 'react'


export default function Footer() {
  

  return (
    <>
      <div className="footer bg-slate-700 relative bottom-0 left-0 right-0">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
            <div className="location sm:py-10 p-3 mb-4">
              <h1 className='text-2xl font-bold	 mb-2'>LOCATION</h1>
              <h5 className='text-base font-normal mb-2'>2215 John Daniel Drive</h5>
              <h5 className='text-base font-normal'>Clark, MO 65243</h5>
            </div>
            <div className="social sm:py-10 p-3 mb-4 ">
              <h1 className='text-2xl font-bold	 mb-2'>AROUND THE WEB</h1>
              <div className="icons">
              <i className="fa-brands fa-facebook mx-1 text-1xl border-solid border-2 border-white p-2 rounded-full"></i>
              <i className="fa-brands fa-twitter mx-1 text-1xl border-solid border-2 border-white p-2 rounded-full"></i>
              <i className="fa-brands fa-linkedin-in mx-1 text-1xl border-solid border-2 border-white p-2 rounded-full"></i>
              <i className="fa-solid fa-globe mx-1 text-1xl border-solid border-2 border-white p-2 rounded-full"></i>
              </div>
            </div>
            <div className="about sm:py-10 p-3">
              <h1 className='text-2xl font-bold	 mb-2'>AROUND THE WEB</h1>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        <div className="copy-right bg-slate-800 py-3">
          <p className='text-center'>Copyright © Your Website 2024</p>
        </div>
    </div>
    </>
  )
}
