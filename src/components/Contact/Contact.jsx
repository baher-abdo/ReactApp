import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="portfolio bg-white flex h-screen items-center m-10">
      <div className="container mx-auto flex flex-col justify-center">
          <div className="content">
          <h1 className='text-4xl font-bold mb-5 text-slate-600 text-center'>CONATCT SECTION</h1>
          <div className="chapes flex items-center justify-center mb-5">
            <div className='w-24 border-solid border-b-4 border-slate-600'></div>
            <i className="fa-solid fa-star mx-3 text-slate-600"></i>
            <div className='w-24 border-solid border-b-4 border-slate-600'></div>
              </div>
                <form className="max-w-md mx-auto">
                  <div className="grid md:grid-cols-1 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="userName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" "  />
                        <label htmlFor="userName" className="peer-focus:font-normal absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="userAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" "  />
                        <label htmlFor="userAge" className="peer-focus:font-normal absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_first_name" id="userEmail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" "  />
                        <label htmlFor="userEmail" className="peer-focus:font-normal absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_first_name" id="userPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-teal-600 focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" "  />
                        <label htmlFor="userPassword" className="peer-focus:font-normal absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
                    </div>
                  </div>
                  <button type="submit" className="text-white bg-teal-600 hover:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center" onClick={e => (e.preventDefault())}>Send Message</button>
                </form>
          </div>
      </div>
    </div>
    </>
  )
}
