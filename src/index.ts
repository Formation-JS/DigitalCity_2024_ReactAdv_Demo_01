import axios from 'axios';
import type { WeatherRequest } from './types/weather-request';


type WeatherData = {
    temp: number;
    city: string;
    country: string;
}

const fetchWeather = async (city: string) : Promise<WeatherData> => {

    const response = await axios.get<WeatherRequest>('...');

    const data : WeatherData = {
        temp: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country
    };

    return data;
}



