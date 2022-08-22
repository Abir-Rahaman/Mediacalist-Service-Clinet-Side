import React from 'react'
import logo from '../../src/assets/images/health-clinic.png'

function Logo() {
  return (
    <div className="flex items-center  justify-center py-4 bg-white"> <img src={logo} alt="" />
      <h2 className="text-4xl ml-8 text-emerald-900	"><span className='text-primary font-bold'>Treatment</span> Solutions</h2>
    </div>
  )
}

export default Logo;