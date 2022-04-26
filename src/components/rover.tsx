import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { IRover } from "../types/GlobalTypes";

interface IRoverProps {
  rover: IRover;
}

function Rover({ rover }: IRoverProps) {
  return (
    <NavLink to={`photos/${rover.name}`}>
      <div style={{ border: "2px solid black" }}>
        <div>{rover.name}</div>
        <div>{rover.landing_date}</div>
        <div>{rover.launch_date}</div>
        <div>{rover.total_photos}</div>
        {rover.cameras.map((camera) => {
          return <div key={camera.id}>{camera.name}</div>;
        })}
      </div>
    </NavLink>
  );
}

export default Rover;
