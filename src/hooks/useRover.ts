import { useQuery } from "react-query";
import { nasaAPI } from "../constants/GlobalConstants";
import { IRover } from "../types/GlobalTypes";

export const UseRover = () => {
  const { data, isError, isLoading, error } = useQuery<IRover[], Error>(
    "rovers",
    () =>
      fetch(`${nasaAPI}?api_key=${process.env.REACT_APP_API_KEY}`).then(
        async (res) => {
          const { rovers } = await res.json();
          return rovers;
        }
      ),
    {
      staleTime: 999999999999,
    }
  );

  return { data, isError, isLoading };
};
