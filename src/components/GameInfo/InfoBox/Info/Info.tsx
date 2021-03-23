import React from 'react';
import { JsxElement } from 'typescript';

interface Props {
    data: any[];
}
const info: React.FC<Props> = (props) => {
    return props.data.map((info, i) => {
        return (
            <li key={i}>{info.name}</li>
        );
    });
};

export default info;