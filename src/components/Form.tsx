import { useState, FormEvent, ChangeEvent } from "react";
import { useAppDispatch } from "../app/store";
import { fetchWeather } from "../features/api/fetchWeather";

const Form = () => {
    const [city, setCity] = useState("");
    const dispatch = useAppDispatch();

    const getCity = (e: FormEvent) => {
        e.preventDefault();
        if (city.trim()) {
            dispatch(fetchWeather(city));
            setCity("");
        }
    };

    return (
        <form onSubmit={getCity}>
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCity(e.target.value)
                }
            />
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;
