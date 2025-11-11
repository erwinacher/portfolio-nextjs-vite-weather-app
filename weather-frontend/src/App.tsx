import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import type { WeatherResponse } from "./schemas/weatherSchema";
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";

function App() {
  const { data } = useSuspenseQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });
  console.log(JSON.stringify(data, null, 2));
  console.log(data?.current.temp);
  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <Card title="Hourly Forecast (48 Hours)">
        {JSON.stringify(data?.hourly).slice(0, 100)}
      </Card>
      <DailyForecast />
    </div>
  );
}

export default App;

// done - styling - Tailwind.css
// done - data fetching - TanStack Query (React Query)
