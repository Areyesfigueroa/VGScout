import React, { Component, Fragment } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import axios from "../../axios";

class SearchBarContainer extends Component {

    state = {
        searchValue: '',
        prevSearchValue: '',
        prevSelection: '',
        selection: null,
        suggestions: null,
    }

    searchInput = React.createRef();

    handleSelection = () => {
        if (this.state.selection !== '' && this.state.selection !== this.state.prevSelection) {
            const selection = this.state.selection;
            this.setState({prevSelection: selection});
            
            //Set the props for the selected game here. 
            console.log(selection);
        }
    }
    
    handleSearch = (newSearchValue) => {
        if(newSearchValue.length <= 0) {
            //Empty
            this.setState({ suggestions: null});
        } else {
            //New Value
            axios.get(`/games?search=${newSearchValue}&page_size=${5}`).
            then(response => {
                console.log(response.data.results);
                this.setState({ 
                    suggestions: response.data.results,
                    selection: response.data.results[0]
                });
            }).catch(error => {
                console.log("Error: " + error);
            });
        }
        this.setState({ searchValue: newSearchValue });
    }

    parseSearch = (searchValue) => {
        return searchValue.trim().replace(/\s/gmi, '-').toLowerCase();
    }

    clearSearch = () => {
        this.searchInput.current.value = "";
        this.setState({
            searchValue: "",
            suggestions: null
        });
    }

    render() {

        return (
            <SearchBar 
            searchRef={this.searchInput}
            search={this.handleSearch} 
            select={this.handleSelection}
            clear={this.clearSearch}
            showCancelBtn={this.state.searchValue.length > 0}
            suggestions={this.props.suggestions ? this.state.suggestions:null} />
        );
    }

}

export default SearchBarContainer;