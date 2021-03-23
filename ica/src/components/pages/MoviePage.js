import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import './MoviePage.css';
import MovieCast from "../MovieCast";

const IMG_SRC = 'https://image.tmdb.org/t/p/w1280';
const MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
//console.log(id);

function MoviePage() {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + id + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setMovie(data);
            });
    }, []);

    const [cast, setCast] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + id + "/credits" + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setCast(data.cast);
            });
    }, []);

    const [director, setDirector] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + id + "/credits" + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                var i;
                for (i = 0; i < data.crew.length; i++) {
                    if (data.crew[i].job === "Director") {
                        //console.log(data.crew[i].job);
                        setDirector(data.crew[i].name);
                        break;
                    }
                }
            });
    }, []);

    const [trailer, setTrailer] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + id + "/videos" + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.results.length > 0) {
                    var i;
                    for (i = 0; i < data.results.length; i++) {
                        //console.log(data.results[i].site);
                        //console.log(data.results[i].type);
                        if (data.results[i].site === "YouTube" && data.results[i].type === "Trailer") {
                            setTrailer("https://www.youtube.com/watch?v=" + data.results[i].key);
                            break;
                        }
                        else {
                            setTrailer("#");
                        }
                    }
                }
                else {
                    setTrailer("#");
                }
            });
    }, []);

    return (
        <>
            <NavBar />
            <div className="tagline"><h1>{movie.tagline}</h1></div>
            <div className="main-container">
                <div className="movie-img">
                    <img src={IMG_SRC + movie.poster_path} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <hr></hr>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <div className="director-container">
                        <h4>Directed by {director}</h4>
                    </div>
                    <a href={trailer}>
                        <h2>Trailer</h2>
                    </a>
                </div>
            </div>
            <div className="cast-container">
                <h1>Cast</h1>
                <div className="movie-cast">
                    {cast.slice(0,50).map((people) => (
                        <MovieCast key={people.id} data={people.id} name={people.name}/>
                    ))}
                </div>
            </div>
            
        </>
    );
}

export default MoviePage
