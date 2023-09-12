import React, {useEffect} from 'react';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";


const MoviesList = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    // const [movies, setMovies] = useState<IMovie[]>([])
    useEffect(() =>{
        dispatch(moviesActions.getAll())
    },[])
    return (
        <div>
            {movies.map((movie)=> <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;
