import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice.js";

export const store = configureStore({
    reducer: {
        jobReducer,
    },
});
