import "../App.css";
import { Link } from "react-router-dom";

import { UseRover } from "../hooks/useRover";
import Rover from "../components/rover";

function App() {
  const { data, isError, isLoading } = UseRover();

  if (data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((info) => {
          return (
            <div key={info.id} style={{ width: "40%" }}>
              <Rover rover={info} />
            </div>
          );
        })}
      </div>
    );
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h1>Error Fetching Data</h1>
    </div>
  );
}

export default App;
