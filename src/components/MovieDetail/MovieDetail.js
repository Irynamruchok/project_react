// import React from 'react';
//
// const MovieDetail = ({detail}) => {
//     const{budget,original_title} = detail
//     return (
//         <div>
//             {budget}
//             {original_title}
//         </div>
//     );
// };
//
// export default MovieDetail;
import React from 'react';

const MovieDetail = ({detail}) => {
    const {budget} = detail
    return (
        <div>
            {budget}
        </div>
    )}
 export default MovieDetail;