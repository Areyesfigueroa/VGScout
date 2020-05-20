import React from 'react';
import App from '../App';

//Snapshots
import renderer from 'react-test-renderer';

//React's UI testing library
import {render,cleanup} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';

expect.extend({toBeInTheDocument});
afterEach(cleanup);

describe("App Component", () => {
  it("Application can render without crashing", () => {
    const div = document.createElement("div");
    render(<App />, div);
  });

})