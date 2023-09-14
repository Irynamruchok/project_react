import React, {useEffect} from 'react';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const currentPage = +query.get('page')
    const {movies} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll({page: currentPage}))
    }, [dispatch, query])

    const getNextPage = () => {

        setQuery(() => ({page:currentPage + 1}));

    };

    const getPrevPage = () => {
        setQuery(() => ({page:currentPage - 1}));
    };



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
