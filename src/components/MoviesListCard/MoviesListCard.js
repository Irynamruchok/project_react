import React from 'react';
import {Link} from "react-router-dom";
import {imageBaseUrl} from "../../constants/urls";



const MoviesListCard = ({movie}) => {
    const {id, original_title, release_date, poster_path, title} = movie

    return (

        <div >
            <Link to={`/movie/${id}`} state={movie}>
                <div> Назва фільму:{original_title}</div>
                <div> Дата виходу:{release_date}</div>
                {poster_path && (
                    <img src={`${imageBaseUrl}${poster_path}`} alt={title}/>
                )}
            </Link>

        </div>
    );
};

export default MoviesListCard;
