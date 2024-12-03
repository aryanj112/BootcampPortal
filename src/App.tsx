// @ts-ignore
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Lectures from './pages/Lectures';
import Group from './pages/Group';
import Attendence from './pages/Attendence';
import Homework from './pages/Homework';
import { GlobalNameProvider } from './globalContext';


function App() {

  return (
    <>
      <GlobalNameProvider>
      <NavBar />
      <div className = "container">
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/lectures' element = {<Lectures />} />
          <Route path = '/homework' element = {<Homework />} />
          <Route path = '/attendence' element = {<Attendence />} />
          <Route path = '/group' element = {<Group />} />
        </Routes>
      </div>
      </GlobalNameProvider>
    </>
  )
}

export default App
