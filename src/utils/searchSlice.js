import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name: "search",
    initialState: { 
    },
    reducers: {
        cacheResults: (state, action) => {
          state = Object.assign(state, action.payload); // Merge the existing state with the new search results using Object.assign
            // This reducer function takes the current state and an action as parameters. 
            // It updates the state by merging the existing state with the new search results provided in the action's payload. 
            // The Object.assign method is used to create a new object that combines the properties of the existing state and the new search results, 
            // effectively updating the cache with the latest search suggestions for a given query.
        },
    },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// Cache to store search suggestions for previously searched queries
// This helps in reducing API calls for the same query and improves performance
// The cache is an object where the key is the search query and the value is the list of suggestions
