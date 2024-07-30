import React from 'react'

export default function About() {
  return (
    <>
    <div className="about bg-teal-600 flex h-screen items-center">
      <div className="container mx-auto flex flex-col justify-center text-center my-16">
        <div className="content">
          <h1 className='text-4xl font-bold mb-5'>ABOUT COMPONENT</h1>
          <div className="chapes flex items-center justify-center mb-5">
            <div className='w-24 border-solid border-b-4 border-white'></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className='w-24 border-solid border-b-4 border-white'></div>
            </div>
            <div className="details flex justify-center gap-4 container px-20">
            <div className="text w-1/2 text-left">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
            <div className="text w-1/2 text-left">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
