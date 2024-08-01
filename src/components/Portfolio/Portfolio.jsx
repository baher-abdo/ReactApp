import port1 from '../../images/port1.png'
import port2 from '../../images/port2.png'
import port3 from '../../images/port3.png'
import React, { useState } from 'react'

export default function Portfolio() {
  let [filter, setFilter] = useState(false)
  let [imgPath, setImgPath] = useState("")


  return (
    <>
    <div className="portfolio bg-white mt-36 mb-10 md:px-10 lg:px-32 flex items-center">
      <div className="flex flex-col justify-center text-center">
        <div className="content">
          <h1 className='text-4xl font-bold mb-5 text-slate-600'>PORTFOLIO COMPONENT</h1>
          <div className="chapes flex items-center justify-center mb-5">
            <div className='w-24 border-solid border-b-4 border-slate-600'></div>
            <i className="fa-solid fa-star mx-3 text-slate-600"></i>
            <div className='w-24 border-solid border-b-4 border-slate-600'></div>
            </div>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3">
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port1} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port1)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port2} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port2)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port3} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port3)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port1} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port1)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port2} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port2)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
              <div className="card bg-slate-600 rounded-lg overflow-hidden relative">
                <img src={port3} alt="portfolio-img" />
                <div onClick={() => { setFilter(true);setImgPath(port3)}} className="filter absolute inset-0 bg-teal-600 opacity-0 flex items-center justify-center hover:opacity-85"><i className="fa-solid fa-plus text-8xl"></i></div>
              </div>
            </div>
        </div>
        </div>
        <div onClick={(e)=>{e.target.tagName == "IMG" ? setFilter(true) : setFilter(false)}} className={`fixed inset-0 bg-sky-600 bg-opacity-50 z-50 flex justify-center items-center ${filter?'show':'hidden'}`}>
        <img className='w-full md:w-1/2' src={imgPath} alt="portfolio-img" />
        </div>
    </div>
    </>
  )
}
