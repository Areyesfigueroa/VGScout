import React from 'react';

const info = (props) => {
    return props.data.map((info, i) => {
        return (
            <li key={i}>{info.name}</li>
        );
    });
};

export default info;