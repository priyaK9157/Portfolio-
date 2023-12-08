import user from '../../img/Users.jpg'
import Image from 'next/image';

const Client = () => {
    return (
      <div className='flex justify-around py-36 h-fit bg-[#222a36] -mt-5' id="services">
      <div className='flex -mt-[6%] gap-20 '>
           <div className="flex gap-5">
            <div className='w-[15rem] h-9'><Image src={user} alt=''/></div>
            
            <div className='text-white font-mono max-w-[490px] m-8 p-4'><p className='text-6xl'>“</p>

Experienced Full Stack Developer proficient in building scalable and responsive web applications using cutting-edge technologies such as React for front-end development, Node.js and Express for server-side scripting, and MongoDB for database management. Well-versed in designing and implementing RESTful APIs, ensuring seamless communication between the client and server. Additionally, skilled in utilizing Tailwind CSS for crafting modern and visually appealing user interfaces. </div>
  
           </div>
           <div className=' font-serif text-3xl mb-14'>Satisfaction <br></br> Clients<br></br> <span className='text-[#676CDB]'>100 %</span><br></br> Clients On <br></br>Worldwide <br></br><span className='text-[#676CDB]'>+ 80 </span><br></br>Projects Done <br></br><span className='text-[#676CDB]'>743</span></div>
      </div>
  </div>
    );
  };
  
  export default Client