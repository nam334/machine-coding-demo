import React, { useEffect } from 'react'
import { API_KEY } from '../config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { addItemToVideo } from '../videoSlice'

 
const BodyComponent = () => {

        // const [fetchedData, setFetchedData] = useState([])
        const fetchedData = useSelector((store) => store.video.videoData)
        const dispatch = useDispatch()

        useEffect(()=>{

          !fetchedData.length && fetchData()
        },[])

        const fetchData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        const result = await data.json()
        dispatch(addItemToVideo(result))
        console.log(result)
        // setFetchedData(result)
    }
  return (
    <div>
       {
        !fetchedData ? <h1>Loading...</h1> : (
          <>
           <div className='py-3 font-mono bg-blue-100 rounded p-4 m-5'>
            <Link to='/video'>
            <h1 className='py-3 font-bold'>{fetchedData.title}</h1>
            </Link>
            <h2 className='font-semibold'>{fetchedData.tagline}</h2>
            <h4 className='py-2'>{fetchedData.overview}</h4>
        </div>
          </>
        )
       }
    </div>
  )
}

export default BodyComponent