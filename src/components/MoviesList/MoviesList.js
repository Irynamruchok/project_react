import React, {useEffect} from 'react';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1


    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() =>{
        console.log("Component updated with currentPage:", currentPage);
        dispatch(moviesActions.getAll())
    },[currentPage])

    const getNextPage = () => {
        const nextPage = currentPage + 1;
        setSearchParams({ page: nextPage.toString() });
        dispatch(moviesActions.getAll(nextPage));
    };

        const getPrevPage = () => {
    { if (currentPage > 1) {
        setSearchParams({ page: (currentPage - 1).toString() });
    }}  }
    // }
    // const getNextPage = () => {
    //     const nextPage = currentPage + 1;
    //     console.log(nextPage)
    //     dispatch(moviesActions.getCurrentPage(nextPage))
    // }

    return (
        <div>
            {movies.map((movie)=> <MoviesListCard key={movie.id} movie={movie}/>)}
            <div>
                <button onClick={getPrevPage}disabled={currentPage === 1}>Prev</button>
                <button onClick={getNextPage}>Next</button>
            </div>
        </div>
    );
};

export default MoviesList;
