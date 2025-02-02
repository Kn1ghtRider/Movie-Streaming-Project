import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    // if [] , run once when new row loads and dont run again
    async function fetchData(){
      try{
        const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
      } catch(error){
        console.error('Error fetching data:',error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height : "390",
    width : "100%",
    playerVars : {
      autoplay : 1,
    },
  };

  const handleclick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        // https://www.youtube.com/watch?v=XtMThy8QKqU
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className='row__posters'>
          {movies.map(movie => (
            <img 
              key={movie.id}
              onClick={() => handleclick(movie)}  
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  );
}

export default Row;