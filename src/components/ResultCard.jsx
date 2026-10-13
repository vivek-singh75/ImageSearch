import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='bg-white relative text-black h-65 w-65 rounded px-5 py-5 overflow-hidden'>
        <div>
           {item.type == "Photos"?<img className='h-full w-full object-center object-center' src={item.src} alt="" /> :""}
           {item.type == "Videos"? <video className='h-full w-full object-center object-center' autoPlay loop muted src={item.src}></video>  :""}
        </div>
        <div className='relative'>
            {item.title} 
        </div>
    </div>
  )
}

export default ResultCard