import {urls} from "../constants/urls";
import {apiService} from "./apiService";



const apiKey = 'cf0d0595e3eed6896fdea0f4ac3acf55'
const moviesService = {

    getAll(){
        return apiService.get(urls.movies.base, {params:{
                api_key: apiKey
            }})
    },
     async getDetails(movieId){

        return apiService.get(urls.movies.byId(movieId),{
            params:{
                api_key:apiKey,
            },

        })
    },
    // getCurrentPage(){
    //     return apiService.get(urls.movies.base,{
    //         params:{
    //             api_key: apiKey
    //         }
    //     })
    // }
}



export {
    moviesService,
    apiKey
}
