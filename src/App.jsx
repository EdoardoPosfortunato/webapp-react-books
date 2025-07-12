import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GuestLayout from './layout/guestLayout'
import Home from './pages/Home'
import Books from './pages/Books'
import SingleBook from './pages/SinglePage'
import NotFound from './pages/NotFound'


function App() {

  // QUESTA chiamata di PRova per vedere se fa il collegamento
  // useEffect(() => {
  //   axios.get("http://localhost:3000/books").then((resp) => {
  //     console.log(resp);
  //   })
  // }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/books' element={<Books />}></Route>
            <Route path='/books/:slug' element={<SingleBook />}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
