import Image from 'next/image';
import React from 'react'

interface PopupInterface {
    name: string;
    images: string[]
}

const Popup:React.FC<PopupInterface> = ({
    name,
    images
}) => {
  return (
    <div id="popup" className='hidden fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50' style={{left: "50%", transform: "translateX(-50%)"}}>
        <div className='flex flex-col w-full md:w-3/5 lg:w-3/5 bg-slate-100 p-5 mt-20 rounded' style={{height: "85vh", overflowY: "auto"}}>
              <div className='flex items-center justify-between'>
                  <h1 className='text-3xl mt-2 font-bold'>{name}</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
              </div>
            <br></br>
            {images && (
                images.map(img => (
                    <>
                    <Image width={100} height={100} src={img} alt="image" className='w-full' style={{border: "4px solid lightgray"}}/>  
                    <br></br>
                    </>
                ))
            )} 
       </div>
    </div> 
  )
}

export default Popup