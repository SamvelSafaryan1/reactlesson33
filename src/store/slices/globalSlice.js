import { createSlice } from "@reduxjs/toolkit"

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: {
        language: 'US'
    },
    reducers: {
        changeLanguage(state, action){
            state.language = action.payload
        }
    }
})

export const {changeLanguage} = globalSlice.actions
export default globalSlice.reducer
