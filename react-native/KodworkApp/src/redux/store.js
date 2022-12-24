import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './job/jobSlice';

export const store = configureStore({
    reducer: {
        job: jobSlice
    }
})