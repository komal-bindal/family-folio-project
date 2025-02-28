import React from "react";

const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <div
      className="card"
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: "green",
        transform: "rotate(270deg)",
      }}
    >
      <div className="card-body">
        <div className="card-title">{name}</div>
        <p className="card-text" id="nodeText"></p>
      </div>
    </div>
  );
};

interface CardProps {
  name: string;
}

export default Card;
