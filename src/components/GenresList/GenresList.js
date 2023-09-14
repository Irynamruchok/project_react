import React, {useEffect} from 'react';


import {genresActions} from "../../redux/slices/genresSlice";
import GenresListCard from "../GenresListCard/GenresListCard";
import {useDispatch, useSelector} from "react-redux";

const GenresList = () => {
    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch();
    console.log(genres)
    useEffect(() => {
        dispatch(genresActions.getAll())
    },[])


    return (
        <div>
            { genres.map((genre) => <GenresListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};
// Array.isArray(genres) &&
export default GenresList;