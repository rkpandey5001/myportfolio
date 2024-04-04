import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen items-center flex justify-center fixed inset-0 bg-primary z-[100]'>
      <div className='flex gap-5 text-4xl font-semibold'>
      <h1 className='text-secondary r'>R</h1>
      <h1 className='text-white k'>K</h1>
      <h1 className='text-tertiary p'>P</h1>
    </div>
    </div>
  )
}

export default Loader;