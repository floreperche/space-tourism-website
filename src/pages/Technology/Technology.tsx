import NavBar from "../../components/NavBar/NavBar";
import "./Technology.css";

const Technology = () => {
  return (
    <div>
      <div className="technology">
        <div className="background"></div>
        <NavBar curentPage="technology" />
        <div className="technology-body"></div>
      </div>
    </div>
  );
};

export default Technology;
