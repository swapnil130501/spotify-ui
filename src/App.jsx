import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlayerLayout from './layouts/PlayerLayout'
import { Home } from './pages/Home'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<PlayerLayout><Home /></PlayerLayout>} />
                <Route path="/search" element={<PlayerLayout>search</PlayerLayout>} />
            </Routes>
        </>
    )
}

export default App
