import React from 'react'
import { BsFillCursorFill } from "react-icons/bs";
import { MdEditLocation } from "react-icons/md";
const Tinybanner = () => {
  return (
    <div className='bg-dark items-center justify-center gap-2 flex py-2'>
        <div className="flex items-center">
        < BsFillCursorFill></BsFillCursorFill>
        <p className='font-bold mr-8'> <small>  Email: example@yourdomain.com</small></p>
        < MdEditLocation></MdEditLocation>
        <p className='font-bold '> <small> Address: 24411 Health Center Drive, Suite 640</small></p>
        </div>
        <div className="flex ml-32">
            <p className='font-bold  cursor-pointer  hover:text-primary ease-out duration-300'> <small> Find a Doctor</small> </p>
            <p className="ml-6 font-bold cursor-pointer hover:text-primary  ease-out duration-300"> <small> Medical Services</small> </p>
            <p className="ml-6 font-bold cursor-pointer hover:text-primary  ease-out duration-300"> <small> Health Insurance</small> </p>
        </div>
    </div>
  )
}

export default Tinybanner;