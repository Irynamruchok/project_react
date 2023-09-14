
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services/genresService";

const initialState = {
    genres: [],
    selectedGenreId: null
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
        async (_,{rejectWithValue}) => {
            try {
                const response = await genresService.getAll()
                return  response.data.genres

            }catch (e) {
                const error = e
                return rejectWithValue(error.response)
            }
        }
)

const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
        setGenreId:(state, action) => {
            state.selectedGenreId = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled,(state, action) =>{
            state.genres = action.payload
        })
    // .addCase(getAll.rejected,(state, action) => {
    //     state.error = action.payload
    // })
})
const {reducer:genresReducer,actions} = genresSlice

const genresActions = {
    ...actions,
    getAll,

}
export const { setGenreId } = genresSlice.actions;
export {
    genresReducer,
    genresActions
}
