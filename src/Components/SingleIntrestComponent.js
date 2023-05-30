import React from 'react'
import LogoChooser from './LogoChooser';

function SingleIntrestComponent(props) {
    const{data}=props;
  return (
    <div data-aos="zoom-in" data-aos-once={true} data-aos-anchor-placement="bottom" className=' flex h-[60px] w-[60px] flex-col mr-2 mb-2 border-transparent border-[1px] p-2 rounded-[0px] justify-center '>
        <LogoChooser type={data?.logo} />
        <div className='text-[12px] font-bold  mt-2 text-center'>{data?.name}</div>

    </div>
  )
}

export default SingleIntrestComponent