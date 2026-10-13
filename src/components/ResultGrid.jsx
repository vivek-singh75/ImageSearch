import React, { useEffect } from 'react'
import  {setActiveTab , setError, setLoading , setResults , setQuery } from '../Redux/features/SearchSlice'
import { fetchPhotos ,fetchVideos, fetchGIF } from '../api/MediaApi'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch =useDispatch()
    const {activeTab ,query, error, loading ,results}  = useSelector((store)=>store.search)

    useEffect( function(){
        const getData =async ()=>{
           if(!query) return <h1>Search </h1>
           try {
                dispatch(setLoading())
                let data
                if(activeTab == "PHOTOS"){
                    let Response =await fetchPhotos(query)
                    data = Response.results.map((item)=>({
                        id:item.id ,
                        type : "Photos" ,                   
                        title:item.alt_description,
                        thumbnail:item.urls.small,
                        src:item.urls.full,
                    }))
                    
                }
                if(activeTab == "VIDEOS"){
                    let Response =await fetchVideos(query)
                    data = Response.videos.map((item)=>({
                        id:item.id ,
                        type : "Videos" ,                   
                        title:item.user.name || "Videos",
                        thumbnail:item.image,
                        src:item.video_files[0].link,
                    }))
                    
                }
                if(activeTab == "GIF"){
                let Response =await fetchGIF(query)
                return data = Response
                    
                }
                console.log(data)
                dispatch(setResults(data))
           } catch (error) {
                dispatch(setError())
           }
        }
        getData()
    },[query, activeTab])

    if(error){
        return <h1>error</h1>
    }
    if(loading){
        return <h1>loading...</h1>
    }

    return (
    <div className="text-white flex justify-center flex-wrap gap-7 overflow-auto px-10 py-5">
        {results.map((item, idx) => {
        return (
            <div key={idx}>
            <ResultCard item={item} />
            </div>
        );
        })}
    </div>
    );
}

export default ResultGrid