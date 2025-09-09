import { useAppSelector } from "../app/store";

const Weather = () => {
    const { city, temp, pressure, status, error } = useAppSelector(
        (state) => state.weather
    );

    if (status === "idle") return <p>Enter a city to get the weather</p>;
    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div className="infoWeath">
            <p>Location: {city}</p>
            <p>Temp: {temp}°C</p>
            <p>Pressure: {pressure} hPa</p>
        </div>
    );
};

export default Weather;
