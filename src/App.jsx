import React from 'react'
import { fetchPhotos , fetchVideos} from './api/MediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {


  return (
    <div className='bg-gray-950 min-h-screen w-screen'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
    </div>
   
  )
}

export default App 





// <div className='flex gap-10  h-screen ,w-full , text-white bg-gray-900'>
    //   <button className='h-10 , w-30 bg-green-400 rounded items-center m-5' onClick={async ()=>{
    //     const data = await fetchPhotos('cat')
    //     console.log(data.results)
    //   }}>Get Photos
    //   </button>
    //   <button className='h-10 , w-30 bg-green-400 rounded items-center m-5' onClick={async ()=>{
    //     const data = await fetchVideos('cat')
    //     console.log(data.videos)
    //   }}>Get Videos
    //   </button>
    // </div>