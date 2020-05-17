import React, { createElement } from "react";

//React's UI testing library
import { render,cleanup} from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

//Snapshots
import renderer from 'react-test-renderer';

//testing components
import SearchBar from '../SearchBar';

expect.extend({toBeInTheDocument, toHaveStyle});
afterEach(cleanup);

// //props.suggestions
// <SearchBar 
// searchRef={this.searchInput}
// search={this.handleSearch} 
// select={this.confirmSelection}
// clear={this.clearSearch}
// showCancelBtn={this.state.searchValue.length > 0}
// suggestions={this.state.suggestions ? this.state.suggestions:null} />

describe("Search bar component", () => {
    it("renders without crashing", () => {
        const div = createElement("div");
        const { container } = render(<SearchBar />, div);
        expect(container.firstChild.classList.contains("SearchBar")).toBeTruthy();
    });

    //Snapshot test
    it("Match Snapshot, cancelBtn and suggestions not showing", () => {
        const component = renderer.create(
            <SearchBar showCancelBtn={false} suggestions={null}/>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    //Snapshot test
    it("Match Snapshot, cancelBtn and suggestions not false/empty", () => {
        const component = renderer.create(
            <SearchBar showCancelBtn={true} suggestions={true}/>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});