"use client"
import React from 'react'
import Home from './ui/Home'
import About from './ui/About'
import Services from './ui/Services'
import Contact from './ui/Contact'
import {Toaster} from 'react-hot-toast';


const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Toaster position="top-center"/>
      <Contact />
    </div>
  )
}

export default page;

