import React from "react";
import NavBar from "./NavBar";
import "../../App.css";
import "./MovieSelection.css";
import Movie from "../Movie";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=04c35731a5ee918f014970082a0088b1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MovieSelection() {
    const ids = ["13223", "76341", "527774", "791373", "299534" ,"157336"];

    return (
        <>
            <NavBar />
            <div className="movie-container">
                {ids.map((movieid) => (
                    <Movie key={movieid} data={movieid} />
                ))}
            </div>
        </>
    );
}

export default MovieSelection;
