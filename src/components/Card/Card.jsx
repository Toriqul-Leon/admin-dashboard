import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          param={props}
          setExpanded={() => setExpanded(false)}
        ></ExpandedCard>
      ) : (
        <CompactCard
          param={props}
          setExpanded={() => setExpanded(true)}
        ></CompactCard>
      )}
    </AnimateSharedLayout>
  );
};

// !Compact Card
const CompactCard = ({ param, setExpanded }) => {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
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

// !Expanded Card
const ExpandedCard = ({ param, setExpanded }) => {
  return (
    <div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div>
        <UilTimes onClick={setExpanded}></UilTimes>
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">chart</div>
      <span>Last 24 hours</span>
    </div>
  );
};
export default Card;
