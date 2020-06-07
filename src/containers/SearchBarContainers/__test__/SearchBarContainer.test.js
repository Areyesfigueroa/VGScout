import React from "react";

//React's UI testing library
import { render,cleanup} from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

//testing components
import SearchBarContainer from "../SearchBarContainer";

expect.extend({toBeInTheDocument, toHaveStyle});
afterEach(cleanup);
 
 describe("Searchbar Container", () => {

    afterEach(cleanup);
    it("renders without crashing", () => {
        const div = document.createElement("div");
        render(<SearchBarContainer suggestionCount={3} searchDelay={0.2} />, div);
    }); 

});
