import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { fetchOpenWeatherData, OpenWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{
  city: string;
}> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null);

  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => console.log(err));
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Grid container justify="space-around">
        <Grid item>
          <Typography className="weatherCard-title">
            {weatherData.name}
          </Typography>
          <Typography className="weatherCard-temp">
            {Math.round(weatherData.main.temp)}
          </Typography>
          <Typography className="weatherCard-body">
            Feels like {Math.round(weatherData.main.feels_like)}
          </Typography>
        </Grid>
        <Grid item>
          {weatherData.weather.length > 0 && (
            <>
              <Typography className="weatherCard-body">
                {weatherData.weather[0].main}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherCard;
