interface CurrentWeather {
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
  is_day: number;
}

interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  precipitation_sum: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  uv_index_max: [number];
}

interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  precipitation_sum: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_max: string;
}

interface Hourly {
  apparent_temperature: [number];
  //   precipitation: [number];
  precipitation_probability: [number];
  //   rain: [number];
  relativehumidity_2m: [number];
  //   showers: [number];
  //   snow_depth: [number];
  //   snowfall: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  //   uv_index_clear_sky: [number];
  windspeed_10m: [number];
}

interface HourlyUnits {
  apparent_temperature: string;
  is_day: string;
  precipitation_probability: string;
  relativehumidity_2m: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  windspeed_10m: string;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: String;
  timezone_abbreviation: String;
  utc_offset_seconds: number;
}
