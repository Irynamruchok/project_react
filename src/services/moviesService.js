import {urls} from "../constants/urls";
import {apiService} from "./apiService";
import axios from "axios";


const apiKey = 'cf0d0595e3eed6896fdea0f4ac3acf55'
const moviesService = {

    getAll(){
        return apiService.get(urls.movies.base, {params:{
                api_key: apiKey
            }})
    },
     async getDetails(movieId){
        // const url =  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        // const response = await axios.get(url)
        // console.log(response)
        // const movieData = response.data
        //  console.log(movieData.budget)
        // return movieData

        return apiService.get(urls.movies.byId(movieId),{
            params:{
                api_key:apiKey,
                // language: 'en-US'
            },
            // headers: {'Accept': 'application/json'}
        })
    }
}

export {
    moviesService,
    apiKey
}
