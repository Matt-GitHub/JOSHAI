import { useQuery } from "react-query";
import { nasaAPI } from "../constants/GlobalConstants";
import { IPhotos } from "../types/GlobalTypes";

export const UsePhotos = (rover: string, selectedDate: string) => {
  const reformatDate = selectedDate.replaceAll("/", "-");

  const { data, isError, isLoading } = useQuery<IPhotos[]>(
    [rover, selectedDate],
    () =>
      fetch(
        `${nasaAPI}curiosity/photos?earth_date=${reformatDate}&api_key=${process.env.REACT_APP_API_KEY}`
      ).then(async (res) => {
        const { photos } = await res.json();
        return photos;
      }),
    { retry: false, staleTime: 999999999 }
  );

  return { data, isError, isLoading };
};
