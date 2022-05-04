import PropTypes from 'prop-types';
import React from 'react';

const Square = props => {
    return (
        <button disabled={props.winner} className={`square styled-${props.x ? 'x' : props.o ? 'o' : ''}`} {...props}>
            {props.x ? 'x' : props.o ? 'o' : ''}
        </button>
    );
};

Square.propTypes = {
    o: PropTypes.number,
    winner: PropTypes.any,
    x: PropTypes.number,
};

export default Square;
