import React from "react";
import ReactDOM from "react-dom";

//React's UI testing library
import { render,cleanup, getByTestId } from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

//Snapshots
import renderer from 'react-test-renderer';

//testing components
import SectionWrapper from '../SectionWrapper';

expect.extend({toBeInTheDocument, toHaveStyle});
afterEach(cleanup);

it("render without crashing", () => {
    const { getByTestId } = render(<SectionWrapper></SectionWrapper>);
    expect(getByTestId('sectionWrapper').classList.contains("SectionWrapper")).toBeTruthy();
});

it("render children props without crashing", () => {
    render(<SectionWrapper>Children Props</SectionWrapper>);
});

//Snapshot Testing
it("Matches snapshot 1", () => {
    const tree = renderer.create(<SectionWrapper></SectionWrapper>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("Matches snapshot 2", () => {
    const tree = renderer.create(<SectionWrapper><div>Anything</div></SectionWrapper>).toJSON();
    expect(tree).toMatchSnapshot();
});