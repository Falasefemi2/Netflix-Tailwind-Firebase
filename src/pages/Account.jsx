import React from 'react'

const Account = () => {
  return (
    <>
    <div className="w-full text-white">
    <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/82e53bb2-68b3-47d0-9e0c-d9d8fd06a81a/NG-en-20230227-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    </>
  )
}

export default Account