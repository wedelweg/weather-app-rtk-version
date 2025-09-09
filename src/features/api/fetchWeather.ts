import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_key, base_url } from "../../utils/constants";

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `${base_url}?q=${city}&appid=${api_key}&units=metric`
            );
            if (!response.ok) {
                return rejectWithValue("City not found");
            }
            const data = await response.json();
            return {
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
            };
        } catch {
            return rejectWithValue("Network error");
        }
    }
);
