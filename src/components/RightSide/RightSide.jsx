import React from "react";
import Reviews from "../Reviews/Reviews";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 style={{ marginBottom: "1rem", marginTop: "1rem" }}>Updates</h3>
        <Updates></Updates>
      </div>
      <div>
        <h3 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          Customer Review
        </h3>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default RightSide;
