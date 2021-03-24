import React from "react";
import Seat from "./Seat";
import "./Seat.css";

const GenerateSeats = (seatNumbers) => {
  return (
    <div className="row">
      {seatNumbers.map((seatNumber) => {
        return <Seat seatno={seatNumber} />;
      })}
    </div>
  );
};

const SeatMatrix = () => {
  return (
    <div className="movie-complex">
      <div class="screen"></div>
      <div className="container row movie-layout">
        <div className="movie-column-1">
          {GenerateSeats(["A1", "A2"])}
          {GenerateSeats(["B1", "B2"])}
          {GenerateSeats(["C1", "C2"])}
          {GenerateSeats(["D1", "D2"])}
        </div>
        <div className="movie-column-2">
          {GenerateSeats(["A3", "A4", "A5", "A6", "A7"])}
          {GenerateSeats(["B3", "B4", "B5", "B6", "B7"])}
          {GenerateSeats(["C3", "C4", "C5", "C6", "C7"])}
          {GenerateSeats(["D3", "D4", "D5", "D6", "D7"])}
        </div>
        <div className="movie-column-3">
          {GenerateSeats(["A8", "A9"])}
          {GenerateSeats(["B8", "B9"])}
          {GenerateSeats(["C8", "C9"])}
          {GenerateSeats(["D8", "D9"])}
        </div>
      </div>
    </div>
  );
};
export default SeatMatrix;
