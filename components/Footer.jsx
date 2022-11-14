import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
     <div id='footer' className="relative bg-white pt-8">
    <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <h5 className="text-2xl font-extrabold text-slate-500 mt-0 mb-2">
                    Find me on any of these platforms,
                </h5>
                
                <div className='flex font-extrabold text-2xl pt-10 pb-10 gap-6'>
                <AiFillInstagram  className='text-black hover:text-slate-500 animate-pulse hover:animate-spin'/>
                <AiFillTwitterCircle  className='text-black hover:text-slate-500 animate-pulse hover:animate-spin'/>
                <AiFillGithub  className='text-black hover:text-slate-500 animate-pulse hover:animate-spin'/>
                </div>

            </div>
        </div>
        <hr className="m-4 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-lg text-black font-bold py-1">
                    Copyright © 2022 
                    <a href="https://www.linkedin.com/in/haider-ali-391868229" rel='noreferrer'   target="_blank" className="text-black hover:text-slate-600 font-Belmont"> Haider Ali</a>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Footer