import React from "react";
import "../App.css";
import { UsePhotos } from "../hooks/usePhotos";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import DatePicker from "../components/datePicker";
import NoResultsFound from "../components/noResultsFound";
import { NavButton } from "../components/navButton";
import { SinglePhotos } from "../components/photos";

function Photos() {
  const { rover } = useParams();

  const [value, setValue] = React.useState<any | null>(
    format(new Date(), "yyyy/MM/dd")
  );

  const {
    data: data,
    isError,
    isLoading,
  } = UsePhotos(rover || "", String(value));

  if (data) {
    return (
      <div>
        <DatePicker value={value} setValue={setValue} />
        <NavButton path="/" message="back" />
        {data.length === 0 ? (
          <NoResultsFound />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            {data.map((info) => {
              return (
                <div key={info.id}>
                  <SinglePhotos
                    imgSource={info.img_src}
                    earthDate={info.earth_date}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h1>Error Fetching Data</h1>
      <NavButton path="/" message="back" />
    </div>
  );
}

export default Photos;
