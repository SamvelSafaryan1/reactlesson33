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
    async ({language, pageCount = 1, genreId}) => {
        let res
        if(genreId){
            res = await API.getFilmGenre(language, genreId, pageCount)
        } else{
            res = await API.getFilms(language, pageCount)
        }
        return res.data.results
    }
)

export const getSearch = createAsyncThunk(
    'getSearch',
    async (text) => {
        const res = await API.getSearch(text)
        return res.data
    }
)

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        films: [],
        pageCount: 1,
        film: {},
        text: '',
        search: []
    },
    reducers: {
        changePage(state, action){
            state.pageCount += 1
        },
        changeText(state, action){
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFilmsThunk.fulfilled, (state, action) => {
            state.films = action.payload
        })
        builder.addCase(getOneFilm.fulfilled, (state, action) => {
            state.film = action.payload
        })
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.search = action.payload.results
        })
    }
    
})

export const {changePage, changeText} = filmsSlice.actions
export default filmsSlice.reducer
