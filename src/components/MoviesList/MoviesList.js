import React, {useEffect} from 'react';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";


const MoviesList = () => {
    const {movies, currentPage} = useSelector((state) => state.movies);

    const dispatch = useDispatch();

    useEffect(() =>{
        console.log("Component updated with currentPage:", currentPage);
        dispatch(moviesActions.getAll(currentPage))
    },[dispatch,currentPage])

    const getPrevPage = () => {
      if (currentPage > 1) {
          const prevPage = currentPage -1;
          dispatch(moviesActions.getCurrentPage(prevPage))
      }
    }
    const getNextPage = () => {
        // const nextPage = currentPage + 1;
        dispatch(moviesActions.getCurrentPage(currentPage +1))
    }

    return (
        <div>
            {movies.map((movie)=> <MoviesListCard key={movie.id} movie={movie}/>)}
            <div>
                <button onClick={getPrevPage} disabled={currentPage === 1}>Prev</button>
                <button onClick={getNextPage}>Next</button>
            </div>
        </div>
    );
};

export default MoviesList;
