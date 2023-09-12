
import {apiService} from "./apiService";

import {urls} from "../constants/urls";
import {apiKey} from "./moviesService";

const genresService = {
    getAll() {
        return apiService.get(urls.genres.base,{params:{
                api_key: apiKey
            }})
    }
}

export {
    genresService
}
