import React,{useState,useEffect} from 'react';
import "./Banner.css";
import requests from "./Requests";
import axios from "./axios";

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() =>{
        async function fetchData() {
             const request = await axios.get(requests.fetchNetflix);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
               
            );
            return request;
        }
        fetchData();
    },[]);
    console.log(movie);
    return (
        <div className="banner"
           style={{
               backgroundSize:"cover",
               backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
               )`,
               backgroundPosition:"center center",
           }}
        >
            <div className="banner_content">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                <div className="banner_button">Play</div>
                <div className="banner_button">My List</div>
                </div>
                <h1 className="banner_disc">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner__fadeBottom"/>

           
        </div>
    )
}

export default Banner
