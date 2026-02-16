import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

    name: "app",
    initialState: {
        // State to track if the menu is open or closed
        isMenuOpen: true,
    },
    reducers: {
        // Action to toggle the menu state
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
})

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;