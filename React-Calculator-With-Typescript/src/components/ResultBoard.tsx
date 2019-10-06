import * as React from 'react';

const resultBoardStyle = {
    background: "#535c68",
    color: "#fff",
    border: "1px solid #f5f6fa",
    width: '600px',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

type ResultBoard = {
    result: string
}

const ResultBoard = (props: ResultBoard) => {
    return (
        <div style={resultBoardStyle}>
            <h1 style={{textAlign: 'right'}}>{props.result}&nbsp;</h1>
        </div>
    )
}

export default ResultBoard;