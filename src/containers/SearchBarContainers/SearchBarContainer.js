import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import SuggestionsBoxContainer from './SuggestionBoxContainer';
import axios from "../../axios";

class SearchBarContainer extends Component {

    state = {
        searchValue: '',
        prevSearchValue: '',
        prevSelection: '',
        selection: null,
        suggestions: null
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
                this.search(newSearchValue);
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
    search = (newSearchValue) => {
        const maxSuggestionCount = 5, minSuggestionCount = 1;
        let suggestionCount = this.props.suggestionCount;
        
        if(this.props.suggestionCount > maxSuggestionCount) {
            suggestionCount = 5;
        } else if(this.props.suggestionCount < minSuggestionCount) {
            suggestionCount = 1;
        }

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

    render() {

        return (
            <div>
                <SearchBar 
                searchRef={this.searchInput}
                search={this.handleSearch} 
                select={this.confirmSelection}
                clear={this.clearSearch}
                showCancelBtn={this.state.searchValue.length > 0}
                suggestions={this.state.suggestions ? this.state.suggestions:null} />
                
                {this.state.suggestions ? 
                <SuggestionsBoxContainer 
                data={this.state.suggestions}
                searchInput={this.searchInput} /> : null}
            </div>
        );
    }
}

export default SearchBarContainer;