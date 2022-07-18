import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Components/Banner";
import HomeCard from "./Components/HomeCard";
//import { useNavigate } from 'react-router-dom'

import "./Home.css";

function Home() {
  //const navigate= useNavigate();
  return (
    <div className="home">
      <Banner />
      <div className="top_row">
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://trusteyman.com/wp-content/uploads/2019/02/how-does-plumbing-work-e1548696261445.jpeg"
            title="Plumbing"
            description="24/7 plumbing, we show up. If water runs through it, we fix it!"
          />
        </Link>
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://actuatorweb.org/wp-content/uploads/2020/05/beaaa8_9be2fa787b754fafa9908174d4caac79_mv2.jpg"
            title="Electrical"
            description="Install, maintain, and enhance electrical systems and components, including fuses, lights, and wiring."
          />
        </Link>
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://www.homestratosphere.com/wp-content/uploads/2018/08/tile-scribe-083018-min.jpg"
            title="Tile and Flooring"
            description="We provide best tile and flooring service in this country"
          />
        </Link>
      </div>
      <div className="bottom_row">
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://www.homeviews.com/wp-content/uploads/2021/01/fixtures-and-fittings-bathroom-1024x683.jpg"
            title="Home Fixtures/Fittings"
            description="Creating innovative fixtures and fittings design solutions for tomorrow"
          />
        </Link>
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://ecwaters.com/wp-content/uploads/2016/12/blog-Five-Reasons-Why-You-Should-Service-Your-HVAC-Frequently.jpg"
            title="Air conditioning and Refregiration"
            description="Cooling your Future with Technology lets you live Awesomely"
          />
        </Link>
        <Link
          to="/searches"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <HomeCard
            src="https://lifetimeroofsystems.net/wp-content/uploads/Roof-Repair.jpg"
            title="Roof repairing and Painting"
            description="We are here not only for new roofs and paintinf but also for all your roofing and painting needs"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
