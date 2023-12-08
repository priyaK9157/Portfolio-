import React, { useState } from 'react';
import { CiGlobe } from 'react-icons/ci';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import {toast} from 'react-hot-toast'
const apiKey:string= process.env.NEXT_PUBLIC_API_KEY || "4000"

const Contact = () => {
  const [name,setName] = useState('');
  const [ email,setEmail] = useState('');
  const [ message, setMessage] = useState('');
  
  

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  async function CallBackend(){
    const toastId = toast.loading("Sending message");
    try {
      const response = await axios.post(apiKey, {
        email,
        name,
        message,
      });
  
      // Assuming the API call was successful
      setName('');
      setEmail('');
      setMessage('');
  
      toast.success("Thank you for your message");
      toast.dismiss(toastId);
    } catch (error) {
      toast.error("Failed to send message");
      toast.dismiss(toastId);
    }
  }
  return (
    <div className='flex justify-around gap-20' id='contact'>
      <div className='flex gap-52 m-28 p-5'>
        <div className='flex-row'>
          <div className='text-6xl font-serif font-extrabold'>
          Let&apos; s
 <br></br>Connect
          </div>
          <div className='flex text-3xl'>
            <p className='p-4'>
              <CiGlobe />
            </p>
            <p className='p-4'>
              <FaGithub />
            </p>
            <p className='p-4'>
              <FaLinkedin />
            </p>
            <p className='p-4'>
              <FaTwitter />
            </p>
          </div>
        </div>
        <div className='font-mono text-2xl font-bold space-y-10'>
          <p>
            Your name:
            <input className='bg-slate-600' type='text' value={name} onChange={handleChangeName}/>
          </p>
          <p>
            Your email address:
            <input className='bg-slate-600' type='text' value={email} onChange={handleChangeEmail} />
          </p>
          <p>
            Tell about the project:
            <textarea className='bg-slate-600' value={message} onChange={handleChangeMessage} />
          </p>
          <button
            className='text-3xl text-yellow-300 font-bold  flex items-center gap-3'onClick={CallBackend}
          >
            Send <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
