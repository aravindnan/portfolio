import React from 'react'

function SingleProjComponent(props) {
    const{activeTabId,setActiveTabId,data}=props;
  return (
    <div  className="  flex flex-row  my-2     border-black border-[0px]  rounded-[10px] rounded-l-[0px]">
    <div data-aos="fade-down" data-aos-once={true} data-aos-anchor-placement="bottom" className='w-[5px] rounded-[0px] bg-black'></div>      
          <div data-aos="fade-up" data-aos-once={true} data-aos-anchor-placement="bottom" className=" flex flex-col p-3 md:p-4  w-full ">
           <div className=' flex flex-row items-center justify-between '>
               <div className=' flex-col flex flex-1'>
                   <div className=' text-[16px] md:text-[20px] font-bold'>{data?.projectName}</div>
                   <div className='flex flex-row items-center'>
                    { data?.projectMedium?.map((node)=>(                       
                         <div key={node} className='mr-2 text-[11px] flex items-center md:text-[12px] px-1 md:px-2 font-semibold rounded-[0px] w-fit bg-[#000000] text-white'>{node}</div>
                    ))
                    }

                   </div>
               </div>
               <div className='cursor-pointer ' title={activeTabId===data?.projID?'Collapse':'Expand'}  onClick={()=>{activeTabId!==data?.projID?setActiveTabId(data?.projID):setActiveTabId("none")}}>
               {activeTabId===data?.projID?
               <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] md:w-auto md:h-auto' height="32" viewBox="0 -960 960 960" width="32"><path d="m350-394 130-130 130 130 43-42-173-173-173 173 43 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-155.5t85.5-127q54-54.5 127-86T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 83-31.5 156t-86 127q-54.5 54-127 85.5T480-80Zm0-60q141 0 240.5-99T820-480q0-141-99.5-240.5T480-820q-142 0-241 99.5T140-480q0 142 99 241t241 99Zm0-340Z"/></svg>
               :
               <svg xmlns="http://www.w3.org/2000/svg" className='w-[25px] h-[25px] md:w-auto md:h-auto' title='Expand' height="32" viewBox="0 -960 960 960" width="32"><path d="M480-426.384 367.538-538.846q-6.596-6.692-15.759-6.692t-15.855 6.692q-7.077 6.692-6.885 16.308.192 9.615 6.885 16.307l123.845 123.846q8.616 8.615 20.231 8.615 11.615 0 20.231-8.615l124.461-124.461q6.692-6.693 6.577-16-.116-9.308-7.193-16-6.692-6.692-15.999-6.5-9.308.193-16 6.885L480-426.384Zm.067 326.383q-78.221 0-147.397-29.92-69.176-29.92-120.989-81.71-51.814-51.791-81.747-120.936-29.933-69.146-29.933-147.366 0-78.836 29.92-148.204 29.92-69.369 81.71-120.682 51.791-51.314 120.936-81.247 69.146-29.933 147.366-29.933 78.836 0 148.204 29.92 69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173 0 78.221-29.92 147.397-29.92 69.176-81.21 120.989-51.291 51.814-120.629 81.747-69.337 29.933-148.173 29.933Z"/></svg>                }    
               </div>
           </div>
           {
               activeTabId===data?.projID?
               <div className='flex flex-col'>
               <div className='flex flex-col mt-5 bg-[#f1f1f1] p-2 rounded-[0px]'>
                   {
                       data?.projectFeatures.map((node)=>(
                          <div className='flex flex-row items-start my-1'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='scale-75 md:scale-100 mt-[-1px] md:mt-[3px] min-w-[20px] min-h-[20px]' height="20" viewBox="0 -960 960 960" width="20"><path d="M480-252.463 309.77-149.695q-6.461 3.462-13.153 3.154-6.692-.308-12.154-4.154-5.461-3.846-8.192-10.115t-.731-13.961l44.769-193.537L170.541-499q-6.077-5.076-7.577-11.653-1.5-6.577.5-13.038 1.616-6.077 6.885-10.231t12.961-4.769l198.153-17.461 77.076-183.076q3.231-6.692 9.115-10.231 5.885-3.538 12.346-3.538t12.346 3.538q5.884 3.539 9.115 10.231l77.076 183.076 198.153 17.461q7.692.615 12.961 4.769t7.269 10.231q1.616 6.461.116 13.038T789.459-499L639.691-368.308l45.153 193.537q1.616 7.692-1.115 13.961t-8.192 10.115q-5.462 3.846-12.154 4.154-6.692.308-13.153-3.154L480-252.463Z"/></svg>
                           <div className='text-[12px] md:text-[18px] ml-1'>{node}</div>
                           </div>
                       ))
   
                   }
                   
               </div>
               {
                    data?.projectLink?
                    <a target='_blank' className="text-[14px] md:text-[16px] mt-2 underline font-semibold flex flex-row items-center hover:text-[#020268] w-fit underline-offset-4" href={data?.projectLink}>
                        View More
                    </a>:null
                   }
                </div>:
               null

           }
          
          
          </div>


   </div>
  )
}

export default SingleProjComponent