import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import type { WeatherResponse } from "../../schemas/weatherSchema";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function HourlyForecast({}: Props) {
  const { data } = useSuspenseQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex flex-row gap-6 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}&deg;F</p>
        </div>
      ))}
    </Card>
  );
}
