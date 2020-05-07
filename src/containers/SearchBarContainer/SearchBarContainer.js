import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import axios from "../../axios";

class SearchBarContainer extends Component {

    state = {
        searchValue: '',
        prevSearchValue: '',
        result: null
    }

    searchInput = React.createRef();

    search = () => {
        if (this.state.searchValue !== '' && this.state.searchValue !== this.state.prevSearchValue) {
            this.setState({prevSearchValue: this.state.searchValue});
            
            //Axios api goes here.
            axios.get(`/games?search=${this.state.searchValue}`).
                then(response => {

                    //If it matches exactly save it. 
                    if(response.data.results[0].slug === this.state.searchValue) {
                        //Display exact item.
                        this.setState({result: response.data.results[0]});
                        console.log(response.data.results[0]);
                    } else {
                        //Display Suggestion Box.
                        console.log(response.data.results);
                    }
                }).catch(error => {
                    console.log("Error: " + error);
                });
        }
    }

    parseSearch = (searchValue) => {
        //Spaces are hyphens
        //everything is lowercase.
        //Delete spaces from the front and back of the string.
        return searchValue.trim().replace(/\s/gmi, '-').toLowerCase();
    }

    handleChange = (newValue) => {
        const parsedSearchValue = this.parseSearch(newValue);
        this.setState({ searchValue: parsedSearchValue});
    }

    clearSearch = () => {
        this.searchInput.current.value = "";
        this.setState({ searchValue: "" });
    }

    render() {

        return (
            <SearchBar 
            searchRef={this.searchInput}
            changed={this.handleChange} 
            search={this.search}
            clear={this.clearSearch}
            showCancelBtn={this.state.searchValue.length > 0} />
        );
    }

}

export default SearchBarContainer;