import React from 'react'

const TitleBar = () => {
  return (
    <header className='bg-slate-300  h-[13%] flex justify-center items-center shadow-md mb-14 rounded-t-xl dark:bg-gray-800 dark:text-white text-primary'>
        <h1 className='text-4xl font-bold'>Weather App</h1>
    </header>
  )
}

export default TitleBar