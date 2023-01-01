
import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from './Requests';

function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random()*request.data.results.length - 1)
            ])
            return request;
        }
        fetchData();
        
     },[])
     console.log(movies);

    function truncate (string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

  return (
    <header className='banner' style={{
        backgroundImage : `url("https://frpnet.net/wp-content/uploads/2021/01/netflix-banner.jpg")`,
        backgroundSize : 'cover',
        backgroundPosition : "center center",
        }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">{truncate(`This is a test description`, 150)}</h1>
        </div>
        <div className='banner--fadeButton'/>
    </header>
  )
}

export default Banner
