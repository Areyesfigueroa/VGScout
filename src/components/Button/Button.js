import React from 'react';
import './Button.css';

const Button = (props) => (
    <div data-testid="button" className="button-style">
        {props.label}
    </div>
);

export default Button;