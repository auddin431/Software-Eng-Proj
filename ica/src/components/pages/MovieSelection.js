import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "../../App.css";
import "./MovieSelection.css";
import Movie from "../Movie";

function MovieSelection() {
    const ids = ["13223", "76341", "527774", "791373", "299534", "157336", "402900", "359724", "155", "7446", "330459", "339403", "168259", "389165", "106646"];

    const [movies, setMovies] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/movies/nowshowing')
        .then((res) => res.json())
        .then((data) => {
            setMovies(data);
            console.log(data);
        })
    }, []);

    return (
        <>
            <NavBar />
            <div className="movie-container">
                {movies && movies.map((movie) => (
                    <Movie key={movie.movieid} data={movie.movieid} />
                ))}
            </div>
        </>
    );
}

export default MovieSelection;