

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";




const initialState = {
    movie:null,
    currentPage:1,
    totalPages:0,
    movies:[],
    error:null
}
const getAll = createAsyncThunk(
    'moviesSlice/getAll',
        async ({page},{rejectWithValue}) => {
            try {
                const response = await moviesService.getAll(page);
                const movies =   response.data.results

                return movies
            }catch (e) {
                const error = e
                return rejectWithValue(error.response)

            }
        }
)

const getTotalPages = createAsyncThunk(
    'moviesSlice/getTotalPages',
    async (_,{rejectWithValue}) => {
        try {
            const response = await moviesService.getAll()

           const totalPages =response.total_pages
            console.log(totalPages)
return totalPages
        }catch (e) {

        }
    }
)

const getDetails = createAsyncThunk(
    'moviesSlice/getCurrent',
    async (movieId,{rejectWithValue}) => {
        try {
            // const {data} = await moviesService.getDetails(movieId)
            // console.log(data,'rr')
            // return data
            const response = await moviesService.getDetails(movieId);
            const movieData = response.data
            console.log(movieData.budget, 'hghgvhgv')
            return movieData

        }catch (e) {

        }
    }
)

// const getAllMoviesByGenre = createAsyncThunk(
//     'moviesSlice/getAllMoviesByGenre',
//     async ({genreId},{rejectWithValue, getState} => {
//         try {
//             const state = getState()
//             const currentPage =state.movies
//             const allMovies = []
//             let page = 1
//             let totalPages = 1
//             while (page <= totalPages) {
//                 const response = await moviesService.getAll()
//             }
//
//         }catch (e) {
//
//         }
// })
// )






const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        .addCase(getAll.rejected,(state, action) => {
            state.error = action.payload
        })
        .addCase(getDetails.fulfilled,(state, action) => {
            state.movie = action.payload
        })
        .addCase(getTotalPages.fulfilled,(state, action) => {
            state.totalPages = action.payload
        })

})

const {reducer: moviesReducer, actions} =moviesSlice
const moviesActions = {
    ...actions,
    getAll,
    getDetails,
    // getCurrentPage
}


export {
    moviesReducer,
    moviesActions,

}