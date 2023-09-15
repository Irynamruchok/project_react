


import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/slices/moviesSlice";
import {imageBaseUrl} from "../../constants/urls";

const MoviesListByGenre = () => {
    const selectedGenreId = useSelector(state => state.genres.selectedGenreId);
    const { movies,loading } = useSelector((state) => state.movies);
    const dispatch = useDispatch();




useEffect(() => {
        dispatch(moviesActions.getAll());
    }, [dispatch]);
    //
    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredMovies = movies.filter((movie) => {
        return selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true;
    });

    if (filteredMovies.length === 0) {
        return <p>Немає фільмів для вибраного жанру.</p>;
    }
    //
    return (
        <div>
           {filteredMovies.map((movie) =>
               <div key={movie.id}>{movie.title}
                   {movie.poster_path &&(
                       <img key={movie.id} src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title}/>
                   )}
               </div>

           )}
         </div>
    );
};

 export default MoviesListByGenre;

