import { configureStore } from "@reduxjs/toolkit"
import genresSlice from './slices/genresSlice'
import globalSlice from './slices/globalSlice'

const store = configureStore({
    reducer: {
        genresData: genresSlice,
        globalData: globalSlice
    }
})

export default store
