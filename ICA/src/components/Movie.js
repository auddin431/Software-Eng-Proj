import React, { useEffect, useState } from "react";

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=04c35731a5ee918f014970082a0088b1";

function Movie({data}) {
    const [movie, setMovie] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch(MOVIE_API + data + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovie(data);
            });
    }, []);

    return (
        <div className="movie"> 
            <img src={IMG_API + movie.poster_path} alt={movie.title} />
            <h4>{movie.title}</h4>
        </div>
    );
}

export default Movie;
