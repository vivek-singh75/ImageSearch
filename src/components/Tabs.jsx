import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../Redux/features/SearchSlice'

const Tabs = () => {
    const tabs = ["PHOTOS" , "VIDEOS" , "GIF"]
    const dispatch= useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className='flex gap-5 p-5'>
        {tabs.map(function(elem , idx) {
        return <button className={`${activeTab === elem?'bg-blue-500' :'bg-gray-600'} 
            transition text-white h-8 w-20  py-px-10 rounded cursor-pointer active:scale-95`}
         key={idx} onClick={()=>{
            dispatch(setActiveTab(elem))
            console.log(elem)
         }}
         >{elem}</button>

        })}
    </div>
  )
}

export default Tabs