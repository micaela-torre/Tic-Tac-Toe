
import PropTypes from "prop-types"
import React from 'react';

const Input = ({ type ="", name="", placeholder="", className="",style={}, value, ...restProps}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={className}
            value={value}
            style={style}
            required
            {...restProps} 
        />
    );
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.any
}



export default Input;
