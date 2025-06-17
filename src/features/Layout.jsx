import React from 'react'
import Navbars from '../modules/Navbars'
import Headers from '../modules/Headers'
import PageRoutes from '../routes'

const Layout = () => {
  return (
    <div className='flex justify-between'>
        <Navbars/>
        <div className='w-[78%] p-[32px] h-[100vh] overflow-y-auto'>
            <Headers/>
            <PageRoutes/>
        </div>
    </div>
  )
}

export default Layout