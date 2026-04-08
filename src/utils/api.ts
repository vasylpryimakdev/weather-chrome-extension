const OPEN_WEATHER_API_KEY = "08e804071a4f49c4885e11d8d2ebae4f";

export async function fetchOpenWeatherData(city: string): Promise<any> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();
  return data;
}
