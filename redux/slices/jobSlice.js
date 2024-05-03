import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateJobs = createAsyncThunk("updateJobs", async (offset) => {
    const apiUrl = "https://api.weekday.technology/adhoc/getSampleJdJSON";
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            limit: 30,
            offset,
        }),
    };

    const response = await fetch(apiUrl, requestOptions);

    const data = await response.json();

    return data;
});

const initialState = {
    data: [],
    pending: false,
    error: null,
    offset: 0,
    filters: {
        minExperience: 0,
        companyName: [],
        location: [],
        remote: null,
        techStack: [],
        role: "",
        isRemote: false,
        minBasePay: 0,
        filterType: "",
    },
};

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            const { filterType, value } = action.payload;
            state.filters[filterType] = value;
            console.log(state.filters);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateJobs.pending, (state, action) => {
            state.pending = true;
        });
        builder.addCase(updateJobs.fulfilled, (state, action) => {
            state.pending = false;
            state.data = [...state.data, ...action.payload["jdList"]];
        });
        builder.addCase(updateJobs.rejected, (state, action) => {
            console.log("api calls rejected");
            state.error = true;
        });
    },
});

export const { updateFilter } = jobsSlice.actions;
export default jobsSlice.reducer;
