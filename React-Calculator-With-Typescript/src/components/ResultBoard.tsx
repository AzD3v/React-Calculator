import * as React from 'react';

const resultBoardStyle = {
    background: '#111', 
    color: '#fff'
}

type ResultBoard = {
    result: string
}

const ResultBoard = (props: ResultBoard) => {
    return (
        <div style={resultBoardStyle}>
            <h1>{props.result}</h1>
        </div>
    )
}

export default ResultBoard;