import React from 'react'
import avatar from '../../images/avataaars.svg'


export default function Home() {
  return (<>
    <div className="home h-screen bg-teal-600 flex items-center">
      <div className="container mx-auto flex flex-col text-center mt-24">
        <div className="image min-w-60 mb-10 mx-auto">
        <img src={avatar} alt="avatar" />
        </div>
        <div className="content">
          <h1 className='text-4xl font-bold mb-5'>START FRAMEWORK</h1>
          <div className="chapes flex items-center justify-center mb-5">
            <div className='w-24 border-solid border-b-4 border-white'></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className='w-24 border-solid border-b-4 border-white'></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  </>
  )
}
