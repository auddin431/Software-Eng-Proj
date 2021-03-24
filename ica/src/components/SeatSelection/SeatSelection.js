import React, { useEffect, useState} from "react"
import "./SeatSelection.css"
import MovieSelector from "./MovieSelector"
import NavBar from "../pages/NavBar";
import SeatAvailability from "./SeatAvailability"
import SeatMatrix from "./SeatMatrix"
import PriceCalculator from "./PriceCalculator"
import MovieContext from './MovieContext'

const IMG_SRC = 'https://image.tmdb.org/t/p/w1280';
const MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const App = () => {

	const [movie, setMovie] = useState([]);
	useEffect(() => {
		fetch(MOVIE_API + id + API_KEY)
			.then((res) => res.json())
			.then((data) => {
				//console.log(data);
				setMovie(data);
			});
	}, []);

	const [movies, EditMovies] = useState({
		moviePrice: 12,
		totalSeats: 0,
		seatNumbers: []
	})

	return (
		<>
		<NavBar />
		<div className="main container">
			<MovieContext.Provider value={{ movies, changeState: EditMovies }}>
				<h1>{movie.title}</h1>
				<h5>$12 per ticket</h5>
				{/*<MovieSelector />*/}
				<SeatMatrix />
				<SeatAvailability />
				<PriceCalculator />
			</MovieContext.Provider>
		</div>
		</>
	)
}

export default App
