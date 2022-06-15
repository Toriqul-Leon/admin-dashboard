import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  console.log(props);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        " <ExpandedCard></ExpandedCard>"
      ) : (
        <CompactCard param={props}></CompactCard>
      )}
    </AnimateSharedLayout>
  );
};

// !Compact Card
const CompactCard = ({ param }) => {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radiusBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        ></CircularProgressbar>
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png></Png>
        <span>$ {param.value}</span>
        <span>Last 24 Hours</span>
      </div>
    </div>
  );
};
export default Card;
