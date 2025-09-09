import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../api/fetchWeather";

interface WeatherState {
    city: string;
    temp: number;
    pressure: number;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: WeatherState = {
    city: "",
    temp: NaN,
    pressure: NaN,
    status: "idle",
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.city = action.payload.city;
                state.temp = action.payload.temp;
                state.pressure = action.payload.pressure;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload as string;
            });
    },
});

export default weatherSlice.reducer;
