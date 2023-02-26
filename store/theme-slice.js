import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: "light",
    },
    reducers: {
        toogle: (state) => {
            if (state.value === "light") {
                state.value = "dark";
            }
            else {
                state.value = "light";
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { toogle } = themeSlice.actions

export default themeSlice.reducer