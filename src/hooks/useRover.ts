import axios from "axios";
import { useQuery } from "react-query";
import { nasaAPI } from "../constants/GlobalConstants";
import { IRover } from "../types/GlobalTypes";

async function fetchRovers(): Promise<IRover[]> {
  const response = await axios.get(
    `${nasaAPI}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("resonse", response.data.rovers);
  return response.data.rovers;
}

export const UseRover = () => {
  const { data, isError, isLoading, error } = useQuery<IRover[], Error>(
    "rovers",
    () => fetchRovers(),
    {
      staleTime: 999999999999,
    }
  );

  return { data, isError, isLoading };
};
