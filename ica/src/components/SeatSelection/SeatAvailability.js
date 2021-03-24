import React from "react"
import Seat from './Seat'
import './Seat.css'

const SeatAvailability = () => {
	return (
		<div className="row">
			Occupied <Seat seatColor="seat-black" />
			Unoccupied <Seat seatColor="seat-grey" />
			Selected <Seat seatColor="seat-occupy" />
		</div>
	)
}

export default SeatAvailability
