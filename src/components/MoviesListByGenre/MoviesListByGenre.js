// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {moviesActions} from "../../redux/slices/moviesSlice";
// const MoviesListByGenre = () => {
//const selectedGenreId = useSelector(state => state.genres.selectedGenreId)
//     const { movies } = useSelector((state) => state.movies);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(moviesActions.getAll());
//     }, [dispatch]);
//     if (!movies.length) {
//         return <div>Loading...</div>; // Або відображайте якийсь інший індікатор завантаження
//     }
//
//     const filteredMovies = movies.filter((movie) => {
//         return selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true;
//     });
//     console.log(filteredMovies)
//     return (
//         <div>
//
//             <div>
//                 {filteredMovies.length === 0 ? (
//                     <p>Немає фільмів для вибраного жанру.</p>
//                 ) : (
//                     filteredMovies.map((movie) => <div key={movie.id}>{movie.title}</div>)
//                 )}
//             </div>
//             {/*{filteredMovies.map((movie) => <div>{movie.title}</div>)}*/}
//
//         </div>
//     );
//
// };

// export default MoviesListByGenre;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../redux/slices/moviesSlice";

const MoviesListByGenre = () => {
    const selectedGenreId = useSelector(state => state.genres.selectedGenreId);
    const { movies, loading } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredMovies = movies.filter((movie) => {
        return selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true;
    });

    if (filteredMovies.length === 0) {
        return <p>Немає фільмів для вибраного жанру.</p>;
    }

    return (
        <div>
            {filteredMovies.map((movie) => <div key={movie.id}>{movie.title}</div>)}
        </div>
    );
};

export default MoviesListByGenre;
