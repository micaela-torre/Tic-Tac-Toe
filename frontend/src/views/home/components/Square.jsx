

import React from 'react';

const Square = props => {
    return (
        <button disabled={props.winner || !props.squares.includes(null)} className={`square styled-${props.x ? 'x' : props.o ? 'o' : ''}`} {...props}>
            {props.x ? 'x' : props.o ? 'o' : ''}
        </button>
    );
};




export default Square;
