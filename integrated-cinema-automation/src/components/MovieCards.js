import React from 'react';
import './MovieCards.css';
import MovieCardItem from './MovieCardItem';

function MovieCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <MovieCardItem
                            src="/images/tt1950186.jpeg"
                            text="Ford v Ferrari"
                            path="/MovieSelection"
                        />
                        <MovieCardItem
                            src="/images/tt4154796.png"
                            text="Avengers: Endgame"
                            path="/MovieSelection"
                        />
                        <MovieCardItem
                            src="/images/tt3748528.jpeg"
                            text="Rogue One"
                            path="/MovieSelection"
                        />
                        <MovieCardItem
                            src="/images/tt1392190.jpeg"
                            text="Mad Max: Fury Road"
                            path="/MovieSelection"
                        />
                        <MovieCardItem
                            src="/images/tt6146586.png"
                            text="John Wick 3: Parabellum"
                            path="/MovieSelection"
                        />
                    </ul>
                    <ul className="cards__items">
                    <MovieCardItem
                            src="/images/tt0275847.jpeg"
                            text="Lilo & Stitch"
                            path="/MovieSelection"
                        />
                        <MovieCardItem
                            src="/images/tt3606752.png"
                            text="Cars 3"
                            path="/MovieSelection"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieCards
