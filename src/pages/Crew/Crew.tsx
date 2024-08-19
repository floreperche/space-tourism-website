import NavBar from "../../components/NavBar/NavBar";
import Headline from "../../components/UI/Headline";
import { useState } from "react";
import "./Crew.css";
import data from "../../data/data.json";

const Crew = () => {
  const crew = data.crew;
  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);

  return (
    <div>
      <div className="crew">
        <div className="background"></div>
        <NavBar curentPage="crew" />
        <div className="crew-body">
          <Headline step="02" value="Meet your crew" />
          <div className="crew-container">
            <div className="infos">
              <div className="explaination">
                <h4>{selectedCrewMember.role}</h4>
                <h3>{selectedCrewMember.name}</h3>
                <p>{selectedCrewMember.bio}</p>
              </div>
              <div className="crew-nav">
                {crew.map((person) => {
                  return (
                    <div
                      onClick={() => setSelectedCrewMember(person)}
                      key={person.name}
                      className={
                        person.name === selectedCrewMember.name
                          ? "selected bubble"
                          : "bubble"
                      }
                    ></div>
                  );
                })}
              </div>
            </div>

            <div className="crew-img">
              <img
                src={`/src${selectedCrewMember.images.webp.slice(1)}`}
                alt="crew image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
