import axios from "axios";
import { useQuery } from "react-query";
import { nasaAPI } from "../constants/GlobalConstants";
import { IPhotos } from "../types/GlobalTypes";

async function fetchPhotos(reformatDate: string): Promise<IPhotos[]> {
  const response = await axios.get(
    `${nasaAPI}curiosity/photos?earth_date=${reformatDate}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  console.log("resonse", response.data.rovers);
  return response.data.photos;
}

export const UsePhotos = (rover: string, selectedDate: string) => {
  const reformatDate = selectedDate.replaceAll("/", "-");

  const { data, isError, isLoading } = useQuery<IPhotos[]>(
    [rover, selectedDate],
    () => fetchPhotos(reformatDate),
    { retry: false, staleTime: 999999999 }
  );

  return { data, isError, isLoading };
};
