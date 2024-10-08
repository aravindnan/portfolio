import React from 'react'

function SingleEducationComponent(props) {
    const{data}=props;
  return (
    <div  className=" flex flex-row  my-2    border-black border-[0px]  rounded-[0px] rounded-l-[0px]">
         <div data-aos="fade-up" data-aos-duration="2000" data-aos-once={true} data-aos-anchor-placement="bottom" className='w-[5px] rounded-[0px] bg-black'></div> 
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-anchor-placement="bottom" className='flex flex-row items-center p-4 '>
                <div className='flex flex-col flex-1 '>
                    <div className='  text-[10px] md:text-[12px] px-2 font-semibold rounded-[0px] w-fit bg-[#000000] text-white'> {data?.duration}</div>
                    <div className=' text-[16px] md:text-[20px] font-bold break-words'>{data?.courseName}</div>
                    <div className='text-[12px] md:text-[15px] font-semibold'>{data?.institutionName}</div>
                </div> 
            </div>
    </div>
  )
}

export default SingleEducationComponent