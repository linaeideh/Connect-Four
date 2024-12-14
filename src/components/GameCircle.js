import React from "react";
import "../Game.css";

const GameCircle = ({ id, children, className,oncircleClicked }) => {
  return (
    <div
    //   style={
    //     id % 2 === 0 ? { backgroundColor: "red" } : { backgroundColor: "blue" }
    //   }
      className={`game-circle ${className}`}
      onClick={() => oncircleClicked(id)}
      id={id}
    >
      {children}
    </div>
  );
};

export default GameCircle;
