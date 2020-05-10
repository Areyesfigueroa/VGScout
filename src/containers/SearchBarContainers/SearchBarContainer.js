import React, { Component } from "react";

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
    timerID = null;
    
    componentDidUpdate(prevProps, prevState) {
        //Takes care of removing the suggestions box if the search bar is empty.
        if(this.state.searchValue !== prevState.searchValue && this.state.searchValue.length <=0) {
            this.setState({ suggestions: null });
        }
    }

    //Updates the suggestion of what the user selects
    handleSelection = (selectionIdx) => {
        let result = this.state.suggestions[selectionIdx];
        this.searchInput.current.value = result.name;
        this.setState({
            selection: result,
        });
    }
    
    //Handles suggestions and selects the first suggestion as the selection.
    handleSearch = (newSearchValue) => {

        if(this.timerID) {
            clearTimeout(this.timerID);
            this.timerID = null;
        } 

        this.timerID = setTimeout(() => {
            console.log("Load Data");
            if(newSearchValue.length > 0) {
                let suggestionCount = this.props.suggestionCount > 5 ? 5:this.props.suggestionCount; 
                this.search(newSearchValue, suggestionCount);
            }
            this.setState({ searchValue: newSearchValue });
        }, this.props.searchDelay * 1000); 
    }

    //Clear search textbox
    clearSearch = () => {
        this.searchInput.current.value = "";
        this.setState({
            searchValue: "",
            suggestions: null
        });
    }

    //Query search
    search = (newSearchValue, suggestionCount) => {
        //API Query
        axios.get(`/games?search=${newSearchValue}&page_size=${suggestionCount}`).
        then(response => {
            if(this.state.searchValue.length > 0) {
                let results = response.data.results;
                
                this.setState({ 
                    suggestions: results.length > 0 ? results:null,
                    selection: results.length > 0 ? results[0]:null
                });
            } 
        }).catch(error => {
            console.log("Error: " + error);
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