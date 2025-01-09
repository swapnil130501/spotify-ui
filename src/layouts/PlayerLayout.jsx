import React from 'react'
import { Sidebar } from '../components/organisms/Sidebar'

function PlayerLayout() {
    return (
        <div className='w-screen h-screen relative bg-red-900'>
            <div className='absolute top-0 left-0 w-64 h-screen bg-green-900'>
                <Sidebar />
            </div>

            <div className='absolute bottom-0 left-0 w-screen h-[100px] bg-gray-900'> 
                Player module
            </div>

        </div>
    )
}

export default PlayerLayout