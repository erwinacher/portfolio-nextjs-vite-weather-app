import { useSuspenseQuery } from "@tanstack/react-query";
import type { WeatherResponse } from "../../schemas/weatherSchema";
import { getWeather } from "../../api";

type Props = {};

export default function CurrentWeather({}: Props) {
  const { data } = useSuspenseQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return <div>CurrentWeather</div>;
}
