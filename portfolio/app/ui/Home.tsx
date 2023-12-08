import React from 'react'
import Image from 'next/image';
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineFileDownload  } from "react-icons/md";
import RESUME from '../../img/Resume.pdf'
import user from '../../img/Users.jpg'

const Home = () => {
  return (
    <div className='bg-[#222a36] p-7' id='home'>
        {/* navbar */}
        <div  className='flex justify-around p-3 h-10'>
            <div className='lg:flex lg:justify-around  h-12 opacity-70  fixed top-0 left-0 right-0   bg-slate-700 bg-transparent font-semibold z-50 '>
                <div className=' flex items-center'>
                  <a href='#home' className="cursor-pointer">PortFolio ~ Priya</a>
                </div>
                   
                <div className='flex gap-3 items-center'>
                  <a href="#home" className="cursor-pointer">Home</a>
                  <a href='#about' className="cursor-pointer">About</a>
                  <a href='#services' className="cursor-pointer">Services</a>
                </div>
                
                <div className=' flex items-center'>
                  <a href='#contact' className='bg-[#6570e3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact Us</a>
                </div>
            </div>
        </div>
        
        {/* hero section */}
        <div className='flex justify-around'>
            <div>
                <h1 className='font-serif mt-20 ml-28 text-[4rem] font-bold'>Hello!<br></br>I'm Priya </h1>
                <p className='text-2xl text-slate-600 max-w-[30rem] ml-28 mt-3'>I’am Fullstack <span className='text-white'>web developer</span> based in India who loves to craft attractive design experiences for the web.</p>
                <div className=' mt-8  ml-28 flex gap-5'>
                <a href='mailto:priyakumari2002002@gmail.com' className=' bg-[#676CDB] hover:bg-blue-700 text-white font-bold py-2 px-2 rounded flex items-center gap-2'> <MdOutlineMailOutline />Email Me</a>
                <a href={RESUME} download={RESUME} className='  underline flex items-center gap-1'><MdOutlineFileDownload />Download CV</a>
                </div>
            </div>
            <div>
            <Image width={250} height={200} src={user} alt="User" />
            </div>
        </div>
    </div>
  )
}

export default Home
