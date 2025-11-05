import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>
            AI Image Enhancer
        </h1>

        <p className='text-lg text-gray-500 '>
          AI That Turns Blurry Into Brilliant
          </p>
      </div>

      <Home></Home>

      <div className='text-sm text-gray-500 mt-6'>
        Upload your Image and let AI enhance in seconds
      </div>  
      
    </div>
  )
}

export default App
