import React from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";

function Detail() {
    const location = useLocation();
    //console.log(location.state);
    return (
    <div className="about__container">
      <span>
        {location.state.summary}
      </span>
      <span>− {location.state.title}</span>
    </div>
    );
  }

  
export default Detail;