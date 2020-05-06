import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import axios from "../../axios";

class SearchBarContainer extends Component {

    state = {
        searchValue: null
    }

    search = () => {
        if (this.state.searchValue !== null) {
            axios.get(`/games/${this.state.searchValue}`).
                then(response => {
                    if (response.data.redirect) {
                        this.handleChange(response.data.slug);
                        this.search();
                    } else {
                        console.log(response.data);
                    }
                }).catch(error => {
                    console.log("Error: " + error);
                });
        }
    }

    handleChange = (newValue) => {
        this.setState({ searchValue: newValue});
    }

    render() {
        return (
            <SearchBar changed={this.handleChange} clicked={this.search} />
        );
    }

}

export default SearchBarContainer;