import React from 'react';
import {Link} from "react-router-dom";



const MoviesListCard = ({movie}) => {
    const {id, original_title, release_date, poster_path} = movie


    // const viewCurrentMovie = () => {
    //      <Link to={'/movie:movieId'}></Link>;
    // }

    return (

        <div >
            <Link to={`/movie/${id}`}>
                <div> Назва фільму:{original_title}</div>
                <div> Дата виходу:{release_date}</div>
            </Link>

            {/*<button onClick={viewCurrentMovie}></button>*/}
        </div>
    );
};

export default MoviesListCard;
