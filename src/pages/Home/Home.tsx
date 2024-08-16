import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import "../../App.css";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="home">
      <div className="background"></div>
      <NavBar />
      <div className="home-body">
        <div className="home-container">
          <div className="home-description">
            <h5>So, you want to travel to</h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home-button-container">
            <div
              className="home-button"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <h4>Explore</h4>
            </div>
            <div
              className={
                hovered ? "btn-background hovered-btn" : "btn-background"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
