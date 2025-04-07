import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { API } from "../../api/api"

export const getGenres = createAsyncThunk(
    'getGenres',
    async ({language}) => {
        const res = await API.getGenres(language)
        return res.data.genres
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        isFetching: false
    }, 
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getGenres.pending, (state, action) => {
            state.isFetching = true
        })
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.isFetching = false
            state.genres = action.payload
        })
    }
})

export default genresSlice.reducer
