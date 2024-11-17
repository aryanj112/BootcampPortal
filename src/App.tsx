// @ts-ignore
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Lectures from './pages/Lectures'

function App() {

  return (
    <>
      <NavBar />
      <div className = "container">
        <Routes>
          <Route path = '/' element = {<Home name = "Aryan" />} />
          <Route path = '/calendar' element = {<Calendar />} />
          <Route path = '/Lectures' element = {<Lectures />} />

        </Routes>
      </div>
    </>
  )
}

export default App
