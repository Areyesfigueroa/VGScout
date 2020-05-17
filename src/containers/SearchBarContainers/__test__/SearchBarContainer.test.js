import React from "react";

//React's UI testing library
import { render,cleanup} from '@testing-library/react';
import {toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';

//Snapshots
import renderer from 'react-test-renderer';

//testing components
import SearchBarContainer from "../SearchBarContainer";

expect.extend({toBeInTheDocument, toHaveStyle});
afterEach(cleanup);

/**
 *     state = {
        searchValue: '',
        prevSearchValue: '',
        prevSelection: '',
        selection: null,
        suggestions: null
    }
 */

 /**
  * Test Cases:
  * 
  */
 
 describe("Searchbar Container", () => {

    afterEach(cleanup);
    it("renders without crashing", () => {
        const div = document.createElement("div");
        render(<SearchBarContainer suggestionCount={3} searchDelay={0.2} />, div);
    }); 

     it("clear icon shows when there is input", () => {
         const component = renderer.create(<SearchBarContainer suggestionCount={3} searchDelay={0.2}/>);
         const instance = component.getInstance();
         
         //jest.mock('../SearchBarContainer');

         //instance.myFunc("No way");
        //console.log(instance.state.searchValue);

        // const div = document.createElement("div");
        // const {getByTestId} = render(<SearchBarContainer suggestionCount={3} searchDelay={0.2}></SearchBarContainer>, div);
        // console.log(searchBarContainer.state);
        // //const searchBarComponent = getByTestId('searchBar');
        
        //Mock input

        //Replicate the query to update the state variables.

        
        //Test each function

    });

});
