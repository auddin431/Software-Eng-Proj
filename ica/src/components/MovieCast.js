import React, { useEffect, useState } from "react";


const MOVIE_API = "https://api.themoviedb.org/3/person/";
const IMG = "/images"
const API_KEY = "?api_key=04c35731a5ee918f014970082a0088b1";
const IMG_SRC = "https://image.tmdb.org/t/p/w500"

function MovieCast({data,name}) {

    //console.log(data,name);

    const [pic, setPic] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API + data + IMG + API_KEY)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.profiles.length > 0) {
                    setPic(IMG_SRC + data.profiles[0].file_path);
                }
                else{
                    let i = Math.floor(Math.random() * 5);
                    if (i === 0) {
                        setPic("https://cdn.discordapp.com/attachments/801853752050843698/814159903219646504/image0.jpg");
                    }
                    else if (i === 1) {
                        setPic("https://cdn.discordapp.com/attachments/801853752050843698/814658683002028053/pimp.jpg");
                    }
                    else if (i === 2) {
                        setPic("https://cdn.discordapp.com/attachments/801853752050843698/818693396470300722/Snapchat-2102304751.jpg");
                    }
                    else if (i === 3) {
                        setPic("https://cdn.discordapp.com/attachments/759969316794925066/783854646833184808/sami.JPG");
                    }
                    else {
                        setPic("https://cdn.discordapp.com/attachments/801853752050843698/814641746877087773/image0.jpg");
                    }
                }
            });
    }, []);

    return (
        <div className="people">
            <img src={pic} alt={name} />
            <h5>{name}</h5>
        </div>
    )
}

export default MovieCast
