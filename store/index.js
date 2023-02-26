import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './theme-slice'

export default configureStore({
    reducer: {
        theme: themeReducer
    },
})