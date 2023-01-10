import React, { cloneElement, useEffect } from 'react'
import { useState } from 'react';
import { getWeather } from '../redux/slices/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SearchBar = () => {
    const {city} = useSelector((state: RootState) => state.openWeather )
    const [input, setInput] = useState(city)
    const [bandera, setBandera] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getWeather(input))
    },[bandera])

    const handleChange = (e:React.FormEvent<HTMLInputElement>) =>{
        setInput(((e.target as HTMLInputElement).value));
    }

    const handleClick = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(input);
        setBandera(!bandera)
    }
    

  return (
    <form onSubmit={(e) => handleClick(e)} className='w-full flex  gap-4 border-2 border-slate-200 rounded-lg justify-between sm:w-[500px] bg-white'>
        <input type="text" className='p-2 w-[65%] rounded-lg outline-none text-black ' value={input} onChange={handleChange} placeholder='Search City'/>
        <button className='bg-slate-400 p-2 w-24 rounded-lg dark:bg-gray-900 font-medium' type='submit'>Search</button>
    </form>
  )
}

export default SearchBar