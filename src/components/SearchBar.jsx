import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../Redux/features/SearchSlice'


const SearchBar = () => {

    const [Text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(Text)
        dispatch(setQuery(Text))


        setText('')
    }


  return (
    <div className='bg-gray-800 p-5 text-white'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input onChange={(data)=>{
                setText(data.target.value)
                
            }} className='h-10 w-60 rounded  border-3 py-px-5 mx-4 p-4' 
            type='text' value={Text} placeholder='Enter'required/>

            <button className='h-10 w-20 rounded  border-3 py-px-5 cursor-pointer active:scale-95 bg-cyan-600' 
            >Search</button>
        </form>
    </div>
  )
}

export default SearchBar