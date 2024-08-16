import React from 'react'

export default function About() {
  document.title = 'About'
  return (
    <>
    <div className="about bg-teal-600 flex h-screen items-center">
      <div className="flex justify-center text-center mt-24">
        <div className="content">
          <h1 className='text-4xl font-bold mb-5'>ABOUT COMPONENT</h1>
          <div className="chapes flex items-center justify-center mb-5">
            <div className='w-24 border-solid border-b-4 border-white'></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className='w-24 border-solid border-b-4 border-white'></div>
            </div>
            <div className="details grid md:grid-cols-2 gap-6 px-24 md:px-52 text-sm">
            <div className="text-left">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
            <div className="text-left">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
