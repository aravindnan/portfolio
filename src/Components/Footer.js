import React, { useEffect, useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { PersonalInformation } from '../DATA/data';

function Footer() {

  const[copied,setCopied]= useState(false)
  useEffect(()=>{

    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 3000);
    }

  },[copied])


  return (
    <div className='bg-[#f1f1f1] p-3 flex flex-col md:flex-row justify-between '>
      <div className='font-semibold text-[14px] md:mx-0 hidden md:flex '>• {PersonalInformation.city} • {PersonalInformation.country}</div> 
        {
        copied?
        <div className=' absolute bg-[#f1f1f1] text-[14px]  font-semibold items-center flex flex-row mx-auto md:mx-0  md:text-[16px]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='scale-75 md:scale-100' height="20" viewBox="0 -960 960 960" width="20"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>
         <span className='text-[12px]'>Email Copied to clipboard</span> 
        </div>:null

        }
        <div className='flex justify-between'>
        <div className='font-semibold text-[14px] md:mx-0 flex md:hidden'>• {PersonalInformation.city} • {PersonalInformation.country}</div>
        <div className='flex flex-row items-center justify-between md:justify-around w-[90px]'>
          <a href={PersonalInformation.linkedinURL} className='cursor-pointer' target='_blank' >
          <div>
          <svg height='25' width='25' className='scale-75 md:scale-100' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </div>
          </a>

          <CopyToClipboard
          className="cursor-pointer"
          text={PersonalInformation.emailID}
          onCopy={()=>setCopied(true)}
          >
          <div title="Copy Email">
          <svg   height='25' width='25' className='scale-75 md:scale-100'  viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          </div>
          </CopyToClipboard>
          
          
          {/* <a href="https://www.instagram.com/aravind.nandakumar" className='cursor-pointer' target='_blank'>
          <div>
          <svg  height='25' width='25' className='scale-75 md:scale-100' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </div>
          </a> */}


        </div>
        </div>
      


    </div>
  )
}

export default Footer