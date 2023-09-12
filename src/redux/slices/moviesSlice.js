

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";



const initialState = {
    movie:null,
    movies:[],
    error:null
}
const getAll = createAsyncThunk(
    'moviesSlice/getAll',
        async (_,{rejectWithValue}) => {
            try {
                const response = await moviesService.getAll();
                const moviesData = response.data
                const movies = moviesData.results
                return movies
            }catch (e) {
                const error = e
                return rejectWithValue(error.response)

            }
        }
)

const getDetails = createAsyncThunk(
    'moviesSlice/getCurrent',
    async (movieId,{rejectedWithValue}) => {
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

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{

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
})

const {reducer: moviesReducer, actions} =moviesSlice
const moviesActions = {
    ...actions,
    getAll,
    getDetails
}

export {
    moviesReducer,
    moviesActions
}