import React, { useState } from 'react'
import Mainleout from './leyout/Mainleout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import DarkHome from './components/DarkHome'
import Darkleout from './leyout/DarkLeout'


const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Mainleout data={setDarkMode} dark={darkMode}>
              <Home dark={darkMode} />
            </Mainleout>
          }
        />
        <Route
          path='/DarkHome'
          element={
            <Darkleout>
              <DarkHome />
            </Darkleout>
          }
        />
      </Routes>

    </div>
  )
}

export default App
