import React from "react"
import Seat from './Seat'
import './Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber}/>
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
	return (
		<div className="movie-complex">
			<div class="screen"></div>
			<div className="container row movie-layout">
				<div className="movie-column-1" >
					{GenerateSeats([1, 2])}
					{GenerateSeats([3, 4])}
					{GenerateSeats([5, 6])}
					{GenerateSeats([7, 8])}
				</div>
				<div className="movie-column-2">
					{GenerateSeats([13, 14, 15, 16, 17])}
					{GenerateSeats([18, 19, 20, 21, 22])}
					{GenerateSeats([23, 24, 25, 26, 27])}
					{GenerateSeats([28, 29, 30, 31, 32])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([33,34])}
					{GenerateSeats([35,36])}
					{GenerateSeats([37, 38])}
					{GenerateSeats([39, 40])}
				</div>
			</div>
		</div>
	)
}
export default SeatMatrix
