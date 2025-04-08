import { configureStore } from "@reduxjs/toolkit"
import genresSlice from './slices/genresSlice'
import globalSlice from './slices/globalSlice'
import filmsSlice from './slices/filmsSlice'

const store = configureStore({
    reducer: {
        genresData: genresSlice,
        globalData: globalSlice,
        filmsData: filmsSlice,
    }
})

export default store
