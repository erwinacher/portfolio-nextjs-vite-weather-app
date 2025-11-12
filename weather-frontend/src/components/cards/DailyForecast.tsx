import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import type { WeatherResponse } from "../../schemas/weatherSchema";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          {/* <img
            className="size-8"
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt=""
          /> */}
          <WeatherIcon src={day.weather[0].icon} />
          <p>{Math.round(day.temp.day)}&deg;F</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}</p>
        </div>
      ))}
    </Card>
  );
}
