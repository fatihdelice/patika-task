import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        selectedJob: "",
        favoriteJobs: []
    },
    reducers: {
        changeJob: (state, action) => {
            state.selectedJob = action.payload
        },
        addFavorite: (state, action) => {
            state.favoriteJobs.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favoriteJobs = state.favoriteJobs.filter(item => {
                return item.id !== action.payload;
            });
        }

    },
    extraReducers: {}
})

export const { changeJob, addFavorite, removeFavorite } = jobSlice.actions

export default jobSlice.reducer