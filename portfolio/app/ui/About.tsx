import React from 'react'
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { CgIfDesign } from "react-icons/cg";
import { SiBackendless } from "react-icons/si";

 const About = () => {
  return (
    <div className='bg-[#191d23] h-fit py-36 justify-around flex flex-row-reverse' id='about'>
        <div>
            <div>
                <p className='font-bold  text-2xl p-7'>Developer and Designer, specialized in <br></br><p>UI/UX and Web Developer</p></p>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#676CDB] p-3  w-[288px] h-[195px] flex flex-col-reverse"><p className='font-bold'><HiMiniComputerDesktop />Front End Developer</p></div>
            <div className="bg-white p-3 w-[288px] h-[195px] flex flex-col-reverse text-black font-bold"><p><CgIfDesign />UI/UX Designer</p></div>
            <div className="bg-white p-3  w-[288px] h-[195px] flex flex-col-reverse text-black font-bold"><p><SiBackendless />Backend Developer</p></div>
            </div>
        </div>

        <div className='mt-20 space-y-8'>
             <div className=' text-[#53d5d5] text-7xl'>3+</div>
             <div className=' max-w-[10%] text-4xl space-y-2 '> 
             <div>Years</div> 
             <div className=' font-bold'>Experience </div>
             <div>Working</div>
        </div>
        </div>
    </div>
  )
}
export default About;
