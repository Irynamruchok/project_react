const baseURL = process.env.REACT_APP_API

const movies = '/discover/movie'
const genres = '/genre/movie/list'
const search = '/search/movie'
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const urls = {
    movies:{
        base: movies,
        byId:(movieId) => {
            console.log(movieId)
            return `movie/${movieId}`
        }
    },
    genres:{
        base: genres,
        byId:':id'
    },
    search:{
        base:search
    }

}

export {
    baseURL,
    urls,
    imageBaseUrl
}