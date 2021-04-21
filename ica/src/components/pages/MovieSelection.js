import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "../../App.css";
import "./MovieSelection.css";
import Movie from "../Movie";

function MovieSelection() {
    const ids = ["13223", "76341", "527774", "791373", "299534", "157336", "402900", "359724", "155", "7446", "330459", "339403", "168259", "389165", "106646"];

    const [movies, setMovies] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/movies/nowshowing',{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data);
            console.log(data[0]);
        })

            // result => {
            //     console.log('33333333333333');
            //     if (result.status === 200) {
            //         setMovies(JSON.parse(result.json()));
            //         console.log(movies);
            //         console.log(result.json());
            //     }
            // }
        //);
    }, []);

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