import React, {useEffect, useState} from 'react'
import instance from '../axios'
import requests from '../requests'
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')


    useEffect(() => {

        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals)

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
           return request
        }

        fetchData();
    }, [])

    console.log(movie)

    // function truncate(str, num) {
    //     if (str.length > num) {
    //         return str.slice(0, num) + "...";
    //     } else {
    //         return str;
    //     }
    // }


    return (
        <header className='banner'
        style= {{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
    >

        <div className='banner-content'>
        <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

            <div className='banner-buttons'>
                <button className='banner-button'> Play </button>
                <button className='banner-button'> My List </button>
            </div>

            <h2 className = 'banner-description'> {movie?.overview} </h2>
          
        </div>
        <div className='fade-button' />
            </header>
        
    );
}


export default Banner
