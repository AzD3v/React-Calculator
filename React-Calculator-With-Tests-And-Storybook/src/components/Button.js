import React from "react";

const buttonStyle = {
  fontSize: "25px",
  padding: "15px 26px",
  background: "#192a56",
  color: "#f5f6fa",
  border: "1px solid #f5f6fa"
};

const Button = props => {
    return (
        <button style={buttonStyle} onClick={props.onClickButton} value={props.value}>
            {props.label}
        </button>
    )
}

export default Button;