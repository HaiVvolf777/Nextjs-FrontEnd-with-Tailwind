import React from 'react'

function Hero( {heading, message}) {
  return (
    <div className=' items-center justify-center flex h-screen mb-12 bg-fixed bg-center bg-cover custom-img '>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>

        <div className='p-5 text-zinc-200 z-[2] '>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-4 '> {message}</p>
            <button className='border-2 py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-black'>Contact</button>


        </div>
    </div>
  )
}

export default Hero