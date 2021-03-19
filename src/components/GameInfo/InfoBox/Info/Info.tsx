import React from 'react';

const info: React.FC = (props) => {
    return props.data.map((info, i) => {
        return (
            <li key={i}>{info.name}</li>
        );
    });
};

export default info;