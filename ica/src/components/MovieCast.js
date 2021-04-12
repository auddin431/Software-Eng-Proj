import React, { useEffect, useState } from "react";

const IMG_SRC = "https://image.tmdb.org/t/p/w1280"
const MOVIE_API = "https://api.themoviedb.org/3/person/";
const API_KEY = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY;

function MovieCast({data,name,role}) {

    //console.log(data,name);

    const [pic, setPic] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + data + "/images" + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.profiles.length > 0) {
                    setPic(IMG_SRC + data.profiles[0].file_path);
                }
                else{
                    setPic("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
                }
            });
    }, []);

    return (
        <div className="people">
            <a href={"https://www.themoviedb.org/person/" + data} target="_blank" rel="noreferrer">
                <img src={pic} alt={name} />
            </a>
            <h5>{name}</h5>
            <h6>{role}</h6>
        </div>
    )
}

export default MovieCast
