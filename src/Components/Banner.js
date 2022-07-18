import { Button } from "@mui/material";
import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner_info">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString(
                `<h1>Your all-in-one home maintenance professionals</h1>`
              )

              .pauseFor(900)

              .typeString(`<h3>For Quality repair, Fair pricing</h3>`)
              .start();
          }}
        />
        <Button variant="outline" onClick={() => navigate("/searches")}>
          Book us Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
