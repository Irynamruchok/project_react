import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {useNavigate, useParams} from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";
import {apiKey} from "../../services/moviesService";


const MovieDetails = () => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const [details, setDetails] = useState(null)
    const {movieId} = useParams()
    useEffect(()=>{
        fetch(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then(res=>res.json())
            .then(data=> setDetails(data))
            .catch(error => {
                console.error('Помилка отримання деталей фільму:', error);
            });
    },[movieId])
    console.log(details,'ttuvhgyt')
 // const {movie} = useNavigate()

    // const {movie} = useSelector((state) => state.movie)
    // console.log(movie)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(moviesActions.getDetails(movieId))
    // },[movieId,dispatch])
    //
    // console.log('ttyyy')



    return (
        <div>

            hello
            {details ? (
                <div>
                    <h2>{details.title}</h2>
                    {details.poster_path &&(
                        <img src={`${imageBaseUrl}${details.poster_path}`} alt={details.title}/>
                    )}
                    <p>{details.overview}</p>
                    <p>${details.budget.toLocaleString()}</p>
                    <p>Genres:{details.genres.map(genre => genre.name).join(',')}</p>
                    <p>Rating:{details.vote_average}</p>
                </div>
            ) :(<p>Loading...</p>)}




            {/*{details.budget}*/}
            {/*{details.original_titles}*/}
            {/*{details.map((detail)=><MovieDetail detail={detail}/>)}*/}
            {/*{movie && <MovieDetail  detail={movie}/>}*/}
        </div>
    );
};

export default MovieDetails;