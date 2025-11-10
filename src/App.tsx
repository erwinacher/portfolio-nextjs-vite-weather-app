import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;

// done - styling - Tailwind.css
// done - data fetching - TanStack Query (React Query)
