import React, { useEffect, useState } from "react";
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
    const [movies, setMovies] = useState([]);
    const ids = ["13223", "76341", "527774"];

    useEffect(() => {
        //const fetchMovies = async () => {
        //    var i;
        //    for (i = 0; i < ids.length; i++) {
        //        let response = await fetch(MOVIE_API + ids[i] + API_KEY);
        //        response = await response.json();
        //        //console.log(response);
        //        setMovies([...movies, response]);
        //    }
        //};
        //fetchMovies();
        var i;
        for (i = 0; i < ids.length; i++){
            fetch(MOVIE_API + ids[i] + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies([...movies,data]);
            });
        }
        // fetch(FEATURED_API)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         //console.log(data);
        //         setMovies(data.results);
        //     });
    }, []);

    return (
        <>
            <NavBar />
            <div className="movie-container">
                {movies.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </div>
        </>
    );
}

export default MovieSelection;
