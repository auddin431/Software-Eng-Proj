import React from "react";
import NavBar from "./NavBar";
import "../../App.css";
import MovieCards from "../MovieCards";
import './MovieSelection.css';

const MovieSelection = () => {
    return (
        <>
            <NavBar />
            <MovieCards />
        </>
    );
}

export default MovieSelection;
