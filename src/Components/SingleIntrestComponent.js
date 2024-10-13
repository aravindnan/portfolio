import React from 'react'
import LogoChooser from './LogoChooser';

function SingleIntrestComponent(props) {
    const{data}=props;
  return (
    <div data-aos="zoom-in"  data-aos-anchor-placement="bottom" data-aos-duration="1000" className=' flex h-[60px] w-[60px] flex-col my-1 border-transparent border-[1px] p-2 rounded-[0px] justify-center  mx-1 '>
        <LogoChooser type={data?.logo} />
        <div className='text-[12px] font-bold  mt-2 text-center'>{data?.name}</div>

    </div>
  )
}

export default SingleIntrestComponent