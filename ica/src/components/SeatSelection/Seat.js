import React, { useContext } from "react";
import MovieContext from "./MovieContext";

import "./Seat.css";

const Seat = (props) => {
  const { movies } = useContext(MovieContext);
  const context = useContext(MovieContext);
  //console.log(context.movieInfo);
  const seatNumber = props.seatno;
  const seatStatus = props.seatColor ? props.seatColor : "seat-grey";
  const seatClickHandler = (event, seatNumber) => {
    event.stopPropagation();
    const seatColor = document.querySelector(`.seat-${seatNumber}`).classList;
    if (
      movies.seatNumbers.includes(seatNumber) &&
      seatStatus !== "seat-black"
    ) {
      const newMovieSeats = movies.seatNumbers.filter((seat) => {
        return seat !== seatNumber;
      });
      seatColor.remove("seat-occupy");
      seatColor.add("seat-grey");
      context.changeState({
        ...movies,
        seatNumbers: newMovieSeats,
        totalSeats: movies.totalSeats - 1,
      });
    } else if (seatStatus !== "seat-black") {
      seatColor.remove("seat-grey");
      seatColor.add("seat-occupy");
      context.changeState({
        ...movies,
        movieTitle: context.movieInfo.title,
        seatNumbers: [...movies.seatNumbers, seatNumber],
        totalSeats: movies.totalSeats + 1,
      });
    }
  };
  return (
    <div className="col-md-2">
      <div
        className={`seat seat-${seatNumber} ${seatStatus}`}
        onClick={(e) => seatClickHandler(e, props.seatno)}
      />
    </div>
  );
};

export default Seat;
