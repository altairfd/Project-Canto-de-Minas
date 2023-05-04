import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
