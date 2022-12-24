import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCovid = createAsyncThunk("covidData", async (country) => {
    const res = await axios(`https://covid19.mathdro.id/api/${country ? `countries/${country}` : ""}`)
    return res.data
})

export const fetchCountriesCovid = createAsyncThunk("covidData/country", async () => {
    const res = await axios(`https://covid19.mathdro.id/api/countries`)
    return res.data
})


export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: {
        items: "",
        status: "idle",
        error: "",
        countries: null,
        country: null,
    },
    reducers: {
        selectedCountry: (state, action) => {
            state.countries = action.payload
        }
    },
    extraReducers: {
        [fetchCovid.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchCovid.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "successed";
        },
        [fetchCovid.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },


        [fetchCountriesCovid.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchCountriesCovid.fulfilled]: (state, action) => {
            state.countries = action.payload
            state.status = "successed";
        },
        [fetchCountriesCovid.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },

    },
});

export const {selectedCountry} = covidDataSlice.actions
export default covidDataSlice.reducer;