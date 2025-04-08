import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {API} from "../../api/api"

export const getOneFilm = createAsyncThunk(
    'getOneFilm',
    async ({id, language}) => {
        const res = await API.getFilm(id, language)
        return res.data
    }
)

export const getFilmsThunk = createAsyncThunk(
    "getFilmsThunk",
    async ({language, pageCount}) => {
        const res = await API.getFilms(language, pageCount)
        return res.data.results
    }
)

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        films: [],
        pageCount: 1,
        film: {}
    },
    reducers: {
        changePage(state, action){
            state.pageCount += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilmsThunk.fulfilled, (state,action) => {
            state.films = action.payload
        })
        builder.addCase(getOneFilm.fulfilled, (state, action) => {
            state.film = action.payload
        })
    }
})

export const {changePage} = filmsSlice.actions
export default filmsSlice.reducer
