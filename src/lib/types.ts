import z from 'zod';

export interface LocationSearchRequest {
    query: string;
}

export const GeocodeLocationSchema = z.object({
    name: z.string(),
    country: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    admin1: z.string().optional(),
    timezone: z.string(),
});

export const GeocodeResponseSchema = z.object({
    results: z.array(GeocodeLocationSchema).default([])
});

export type GeocodeLocation = z.infer<typeof GeocodeLocationSchema>;
export type GeocodeResponse = z.infer<typeof GeocodeResponseSchema>;

// export const Wind = z.object({
//     speed: z.number(),
//     deg: z.number(),
//     direction: z.string()
// })

// export const CurrentWeatherResponseSchema = z.object({
//     time: z.string(),
//     temp: z.number(),
//     is_day: z.boolean(),
//     feels_like: z.number(),
//     humidity: z.number(),
//     weather_code: z.number(),
//     precipitation: z.number(),
//     pressure: z.number(),
//     wind: Wind
// })

// export type Wind = z.infer<typeof Wind>;
// export type CurrenWeather = z.infer<typeof CurrentWeatherResponseSchema>;


