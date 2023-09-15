import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {Link, useNavigate, useParams} from "react-router-dom";
import MovieDetail from "../MovieDetail/MovieDetail";
import {apiKey} from "../../services/moviesService";
import {setGenreId} from "../../redux/slices/genresSlice";


const MovieDetails = () => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
    const [details, setDetails] = useState(null)
    const {movieId} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch(`https:api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then(res=>res.json())
            .then(data=> setDetails(data))
            .catch(error => {
                console.error('Помилка отримання деталей фільму:', error);
            });
    },[movieId])
    console.log(details,'ttuvhgyt')


    const handleGenreChooseButton = () => {
        dispatch(setGenreId())
    }

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
                    <div>Genres:{details.genres.map((genre) =>{
                        return ( <div>

                            <Link to={'/moviesByGenre'} onClick={handleGenreChooseButton}>
                                <div>{genre.name}</div>
                            </Link>
                        </div>)

                    }   )}</div>
                    <p>Rating:{details.vote_average}</p>
                </div>
            ) :(<p>Loading...</p>)}
        </div>
    );
};

export default MovieDetails;