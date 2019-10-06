import React from "react";

const ResultBoard = props => {
  return (
    <div style={props.style}>
      <h1>{props.result}</h1>
    </div>
  );
};

export default ResultBoard;
