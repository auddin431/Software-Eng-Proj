  
import React, {useContext} from "react"
import MovieContext from "./MovieContext"

const PriceCalculator = () => {
	const {movies} = useContext(MovieContext)

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<p>Selected seat {movies.seatNumbers.join(",")} ({movies.totalSeats}) and the total price is ${movies.totalSeats*movies.moviePrice}</p>
		</div>
	)
}

export default PriceCalculator