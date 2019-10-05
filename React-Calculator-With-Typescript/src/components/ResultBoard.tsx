import * as React from 'react';

const ResultBoard = props => {
    return (
        <div style={{ background: '#111', color: '#fff' }}>
            <h1>{props.result}</h1>
        </div>
    )
}

export default ResultBoard;