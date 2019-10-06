import React from "react";

const resultBoardStyle = {
  background: "#111",
  color: "#fff"
};

const ResultBoard = props => {
  return (
    <div style={resultBoardStyle}>
      <h1>{props.result}</h1>
    </div>
  );
};

export default ResultBoard;
