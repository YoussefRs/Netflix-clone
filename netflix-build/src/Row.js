import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from "./axios"

function Row({title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const [showInfo, setShowInfo] = useState(false);
    const [timer, setTimer] = useState(null);
    const base_url="https://image.tmdb.org/t/p/original/";

    const handleMouseEnter = () => {
        const newTimer = setTimeout(() => {
          setShowInfo(true);
        }, 5000); // show information after 5 seconds
        setTimer(newTimer);
      };
    const handleMouseLeave = () => {
        clearTimeout(timer);
        setShowInfo(false);
      };

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request
    }
    fetchData();
    return () => {
        clearTimeout(timer);
      };

},[fetchUrl,timer]);



  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {movies.map(movie => {
                
                return ( 
                    <>
                    <img className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                         }`} 
                         alt={movie.name}/>
                         {showInfo && (
                            <div className="poster__info">
                                <h3>holla</h3>
                            </div>
                     )}
                    </>
                )
            })}
      </div>
    </div>
  )
}

export default Row
