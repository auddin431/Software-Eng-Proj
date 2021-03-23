import React, { useEffect, useState } from "react";

const IMG_SRC = 'https://image.tmdb.org/t/p/w1280';
const MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY;

function Movie({data}) {
    const PATH = "/MoviePage?id=" + data;
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(MOVIE_API + data + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setMovie(data);
            });
    }, []);

    return (
        <div className="movie"> 
            <a href={PATH}>
                <img src={IMG_SRC + movie.poster_path} alt={movie.title}/>
            </a>
            <h4>{movie.title}</h4>
        </div>
    );
}

export default Movie;
