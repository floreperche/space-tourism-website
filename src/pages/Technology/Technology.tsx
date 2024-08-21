import NavBar from "../../components/NavBar/NavBar";
import Headline from "../../components/UI/Headline";
import { useState } from "react";
import "./Technology.css";
import data from "../../data/data.json";

const Technology = () => {
  const technologies = data.technology;
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

  return (
    <div>
      <div className="technology">
        <div className="background"></div>
        <NavBar curentPage="technology" />
        <div className="technology-body">
          <Headline step="03" value="Space launch 101" />
          <div className="technology-container">
            <div className="tech-info-container">
              <div className="nav">
                {technologies.map((tech, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        tech === selectedTechnology
                          ? "button selected"
                          : "button"
                      }
                      onClick={() => {
                        setSelectedTechnology(tech);
                      }}
                    >
                      <h4>{i + 1}</h4>
                    </div>
                  );
                })}
              </div>
              <div className="infos">
                <h4>The terminology...</h4>
                <h3>{selectedTechnology.name}</h3>
                <p>{selectedTechnology.description}</p>
              </div>
            </div>

            <div className="img-container">
              <img
                className="desktop"
                src={`/src${selectedTechnology.images.portrait.slice(1)}`}
                alt="technology image"
              />
              <img
                className="tablet-mobile"
                src={`/src${selectedTechnology.images.landscape.slice(1)}`}
                alt="technology image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
