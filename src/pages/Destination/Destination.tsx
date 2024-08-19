import NavBar from "../../components/NavBar/NavBar.tsx";
import "./Destination.css";

const Destination = () => {
  return (
    <div>
      <div className="destination">
        <div className="background"></div>
        <NavBar curentPage="destination" />
        <div className="destination-body"></div>
      </div>
    </div>
  );
};

export default Destination;
