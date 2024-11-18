// @ts-ignore
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Lectures from './pages/Lectures'
import Group from './pages/Group';
import Attendence from './pages/Attendence';
import Homework from './pages/Homework';

function App() {

  return (
    <>
      <NavBar />
      <div className = "container">
        <Routes>
          <Route path = '/' element = {<Home name = "Aryan" />} />
          <Route path = '/calendar' element = {<Calendar />} />
          <Route path = '/lectures' element = {<Lectures />} />
          <Route path = '/homework' element = {<Homework />} />
          <Route path = '/attendence' element = {<Attendence />} />
          <Route path = '/group' element = {<Group />} />
        </Routes>
      </div>
    </>
  )
}

export default App
