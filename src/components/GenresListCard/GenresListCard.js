import React from 'react';

const GenresListCard = ({genre}) => {
    const {id,name} = genre
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export default GenresListCard;