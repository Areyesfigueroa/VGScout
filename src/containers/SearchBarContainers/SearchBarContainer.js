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
        suggestionCount: false
    }

    searchInput = React.createRef();

    componentDidUpdate(prevProps, prevState) {
        //if there is a new value and the new value is empty
        if(this.state.searchValue != prevState.searchValue && this.state.searchValue.length <=0) {
            this.setState({ suggestions: null });
        }
    }

    handleSelection = () => {
        if (this.state.selection !== '' && this.state.selection !== this.state.prevSelection) {
            const selection = this.state.selection;
            this.setState({prevSelection: selection});
            
            //Set the props for the selected game here. 
            console.log(selection);
        }
    }
    
    handleSearch = (newSearchValue) => {
        if(newSearchValue.length > 0) {
            //New Value
            //cap at 5 suggestions
            let suggestionCount = this.props.suggestionCount > 5 ? 5:this.props.suggestionCount; 
            
            //API Query
            axios.get(`/games?search=${newSearchValue}&page_size=${suggestionCount}`).
            then(response => {
                if(this.state.searchValue.length > 0) {
                    let results = response.data.results;
                    console.log(results);
                    
                    this.setState({ 
                        suggestions: results.length > 0 ? results:null,
                        selection: results.length > 0 ? results[0]:null
                    });
                } 
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
            suggestions={this.props.suggestionCount ? this.state.suggestions:null} />
        );
    }

}

export default SearchBarContainer;