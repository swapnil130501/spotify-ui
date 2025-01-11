import React from 'react'
import { Sidebar } from '../components/organisms/Sidebar'
import { Player } from '../components/organisms/Player'

function PlayerLayout({ children }) {
    return (
        <div className='w-screen h-screen relative'>
            <div className='absolute top-0 left-0 w-64 h-screen bg-green-900'>
                <Sidebar />
            </div>

            <div className='ml-64 mb-24'>
                <div className='h-[calc(100vh-100px)]'>
                    {children}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-screen h-[100px]"> 
                <Player />
            </div>

        </div>
    )
}

export default PlayerLayout