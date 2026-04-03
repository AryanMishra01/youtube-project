import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({

    name: "app",
    initialState: {
        // State to track if the menu is open or closed
        isMenuOpen: true,
        selectedVideo: null,
    },
    reducers: {
        // Action to toggle the menu state
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload;
        }
    },
})

export const { toggleMenu, closeMenu, setSelectedVideo } = appSlice.actions;
export default appSlice.reducer;