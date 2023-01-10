import React, { FC, ReactNode } from 'react'

interface Props {
    dato: number;
    text: string;
    simb: string;
    children?:ReactNode;
}

const Tarjetas: FC<Props>  = ({dato, text, simb, children}) => {
  return (
    <div className='bg-slate-200 w-60 h-44 shadow-md flex flex-col items-center p-2 gap-4 justify-center rounded-lg text-primary dark:text-white dark:bg-gray-900'>
        <p className='Capitalize font-semibold text-2xl'>{text}</p>
        <div className='flex flex-col w-full text-5xl font-bold items-center'>
            <div className='flex'>
                <p className=''>{dato}</p>
                <p>{simb}</p>
            </div>
            
            {children}
        </div>
    </div>
  )
}

export default Tarjetas