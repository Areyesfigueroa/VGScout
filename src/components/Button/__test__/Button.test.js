import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

//React's UI testing library
import { render,cleanup } from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

//Snapshots
import renderer from 'react-test-renderer';

expect.extend({toBeInTheDocument, toHaveStyle});

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
}); 

it("renders click me button correctly", () => {
    const div = document.createElement("div");
    const {getByTestId} = render(<Button label="Click Me!"></Button>, div);
    expect(getByTestId('button')).toHaveTextContent("Click Me!");
});

it("renders save button correctly", () => {
    const div = document.createElement("div");
    const {getByTestId} = render(<Button label="Save"></Button>, div);
    expect(getByTestId('button')).toHaveTextContent("Save");
});

//Snapshot Testing
it("Matches snapshot", () => {
    const tree = renderer.create(<Button label={"Save"}></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});