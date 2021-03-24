import React from "react";
import NavBar from "./NavBar";
import "../../App.css";
import "./MovieSelection.css";
import Movie from "../Movie";

function MovieSelection() {
    const ids = ["13223", "76341", "527774", "791373", "299534", "157336", "402900", "359724", "155", "7446", "330459", "339403", "168259", "389165", "106646"];

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
