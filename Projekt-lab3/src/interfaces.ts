export interface IWeatherData {
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    wind: {
        speed: number,
    },
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    weather: [
        {
            description: string,
            icon: string
        },
    ]
};