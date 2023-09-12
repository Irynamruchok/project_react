import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useParams} from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";


const MovieDetails = () => {

    // const [details, setDetails] = useState({})
    // useEffect(()=>{
    //     fetch(`https:api.themoviedb.org/3/movie/${movieId}`)
    //         .then(res=>res.data)
    //         .then(data=> setDetails(data))
    // },[])


    const {movieId} = useParams()
const movie = useSelector(state => state.movies.movie)
    console.log(movie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(moviesActions.getDetails(movieId))
    },[movieId,dispatch])





    return (
        <div>
            {/*{movieData.budget}*/}
            {/*{movie.map((detail) => <MovieDetail key={detail.id} detail={detail}/>)}*/}
        </div>
    );
};

export default MovieDetails;