import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import type { WeatherResponse } from "./schemas/weatherSchema";

function App() {
  const { data } = useQuery<WeatherResponse>({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });
  console.log(JSON.stringify(data, null, 2));
  console.log(data?.current.temp);
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;

// done - styling - Tailwind.css
// done - data fetching - TanStack Query (React Query)
