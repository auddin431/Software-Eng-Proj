import React, {useState} from "react"
import "./SeatSelection.css"

import MovieSelector from "./MovieSelector"
import SeatAvailability from "./SeatAvailability"
import SeatMatrix from "./SeatMatrix"
import PriceCalculator from "./PriceCalculator"
import MovieContext from './MovieContext'

const App = () => {

	const [movies, EditMovies] = useState({
		movieNames: {
			"Ford v Ferrari": 10,
			"Avengers: Endgame": 8,
			"Rogue One": 11,
			"Mad Max: Fury Road": 12,
			"John Wick 3": 12,
			"Lilo & Stitch": 8,
			"Cars 3": 8
		},
		moviePrice: 10,
		totalSeats: 0,
		seatNumbers: []
	})

	return (
		<div className="main container">
			<MovieContext.Provider value={{ movies, changeState: EditMovies }}>
				<MovieSelector />
				<SeatMatrix />
				<SeatAvailability />
				<PriceCalculator />
			</MovieContext.Provider>
		</div>
	)
}

export default App
