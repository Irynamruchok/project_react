import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {genresActions, setGenreId} from "../../redux/slices/genresSlice";

const GenresListCard = ({genre}) => {
    const {id,name} = genre

    const dispatch = useDispatch()
    const handleGenreChoose = () => {
dispatch(setGenreId(id))
    }
    return (
        <div>
            <Link to={'/moviesByGenre'} onClick={handleGenreChoose}>
                <div>{name}</div>
            </Link>

        </div>
    );
};

export default GenresListCard;