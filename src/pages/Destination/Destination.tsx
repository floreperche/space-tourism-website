import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.tsx";
import Headline from "../../components/UI/Headline.tsx";
import "./Destination.css";
import data from "../../data/data.json";

const Destination = () => {
  const destinations = data.destinations;
  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);

  return (
    <div>
      <div className="destination">
        <div className="background"></div>
        <NavBar curentPage="destination" />
        <div className="destination-body">
          <Headline step="01" value="Pick your destination" />
          <div className="destination-container">
            <div className="planet-container">
              {destinations.map((planet) => {
                return (
                  <img
                    key={planet.name}
                    className={
                      planet.name === selectedPlanet.name
                        ? "planet-selected"
                        : ""
                    }
                    src={`/src${planet.images.webp.slice(1)}`}
                    alt={planet.name}
                  />
                );
              })}
            </div>
            <div className="info-container">
              <div className="planet-selector">
                {destinations.map((planet) => {
                  return (
                    <div
                      key={planet.name}
                      onClick={() => setSelectedPlanet(planet)}
                      className={
                        planet.name === selectedPlanet.name ? "selected" : ""
                      }
                    >
                      <p>{planet.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="infos">
                <div className="title">
                  <h2>{selectedPlanet.name}</h2>
                </div>
                <div className="description">
                  <p>{selectedPlanet.description}</p>
                </div>
              </div>
              <div className="break"></div>
              <div className="data">
                <div className="distance">
                  <div className="title">
                    <p>avg. distance</p>
                  </div>
                  <div className="value">
                    <h6>{selectedPlanet.distance}</h6>
                  </div>
                </div>
                <div className="time">
                  <div className="title">
                    <p>est. travel time</p>
                  </div>
                  <div className="value">
                    <h6>{selectedPlanet.travel}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
