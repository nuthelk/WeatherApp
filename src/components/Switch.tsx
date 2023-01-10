import React, { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { changeStateConvert } from '../redux/slices/openWeatherSlice';


const Switch = () => {
    
    const dispatch = useDispatch()

    const handleChange = (e:FormEvent<HTMLLabelElement>) => {
        dispatch(changeStateConvert((e.target as HTMLInputElement).checked))
    }
    

    return (
        <>
        <label className="switch" onChange={(e) => handleChange(e)}>
            <input type="checkbox" />
                <span className="slider"></span>
        </label>
        </>
        
    )
}

export default Switch