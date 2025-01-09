import React from 'react'
import { Sidebar } from '../components/organisms/Sidebar'

function PlayerLayout({ children }) {
    return (
        <div className='w-screen h-screen relative bg-red-900'>
            <div className='absolute top-0 left-0 w-64 h-screen bg-green-900'>
                <Sidebar />
            </div>

            <div className='ml-64 mb-24'>
                <div className='h-[calc(100vh-100px)]'>
                    {children}
                </div>
            </div>

            <div className='absolute bottom-0 left-0 w-screen h-[100px] bg-gray-900'> 
            </div>

        </div>
    )
}

export default PlayerLayout