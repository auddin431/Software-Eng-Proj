import React from "react";

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path}) => (
    <div className="movie"> 
        <img src={IMG_API + poster_path} alt={title} />
        <h4>{title}</h4>
    </div>
);

export default Movie;
