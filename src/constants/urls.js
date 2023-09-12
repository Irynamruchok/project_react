const baseURL = process.env.REACT_APP_API

const movies = '/movie/popular'
const genres = '/genre/movie/list'

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
    }
    // genres: genres
}

export {
    baseURL,
    urls
}