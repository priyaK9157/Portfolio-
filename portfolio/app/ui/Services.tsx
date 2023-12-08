import user from '../../img/Users.jpg'
import Image from 'next/image';

const Client = () => {
    return (
      <div className='flex justify-around py-36 h-fit bg-[#222a36] -mt-5' id="services">
      <div className='flex mt-[6%] gap-20 '>
           <div className="flex gap-5">
            <div className='w-[15rem] h-9'><Image src={user} alt=''/></div>
            
            <div className='text-white font-mono max-w-[490px] m-8 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent </div>
  
           </div>
           <div className=' font-serif text-3xl mb-14'>Satisfaction <br></br> Clients<br></br> <span className='text-[#676CDB]'>100 %</span><br></br> Clients On <br></br>Worldwide <br></br><span className='text-[#676CDB]'>+ 80 </span><br></br>Projects Done <br></br><span className='text-[#676CDB]'>743</span></div>
      </div>
  </div>
    );
  };
  
  export default Client