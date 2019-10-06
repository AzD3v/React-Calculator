import * as React from 'react';

const buttonStyle = {
    fontSize: "25px",
    padding: "15px 26px",
    background: "#192a56",
    color: "#f5f6fa",
    border: "1px solid #f5f6fa",
}

type Button = {
    value: string;
    label: string;
    onClickButton(input: React.ChangeEvent<HTMLInputElement>): void | number;
}

const Button = (props: Button) => 
{
    return (
        <button style={buttonStyle} onClick={props.onClickButton} value={props.value}>
            {props.label}
        </button>
    )
}

export default Button;