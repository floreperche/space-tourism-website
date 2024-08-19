import NavBar from "../../components/NavBar/NavBar";
import "./Crew.css";

const Crew = () => {
  return (
    <div>
      <div className="crew">
        <div className="background"></div>
        <NavBar curentPage="crew" />
        <div className="crew-body"></div>
      </div>
    </div>
  );
};

export default Crew;
