import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    <navbar>Navbar</navbar>
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
      <Outlet/>
      </main>
    <footer>Footer</footer>
    </>
  )
}

export default App
