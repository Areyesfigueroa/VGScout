import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import SuggestionsBoxContainer from '../SuggestionBoxContainer/SuggestionBoxContainer';
import { loadSuggestions, addDelay } from "../../utils";


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


    myFunc = (value) => {
        console.log(value);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.searchValue !== prevState.searchValue) {
            this.search();
        }
    }

    displaySelection = (selectionIdx) => {
        if(!this.state.suggestions) return;

        let result = this.state.suggestions[selectionIdx];
        this.searchInput.current.value = result.name;
        this.setState({
            selection: result
        });
    }

    confirmSelection = () => {
        if(!this.state.selection) return;

        console.log(this.state.selection);
        this.setState({ suggestions: null });
    }

    handleSearch = (newSearchValue) => {
       const callback = () => this.setState({ searchValue: newSearchValue });
       const delayTime = this.props.searchDelay * 1000;
       
       this.timerID = addDelay(delayTime, callback, this.timerID);
    }

    clearSearch = () => {
        this.searchInput.current.value = "";
        this.setState({
            searchValue: "",
            suggestions: null
        });
    }

    getSuggestionCount(min, max) {
        if(this.props.suggestionCount > max) return max;
        if(this.props.suggestionCount < min) return min;

        return this.props.suggestionCount;
    }

    //Query search
    search = () => {

        if(this.state.searchValue.length > 0) {
            //API Query
            loadSuggestions(this.state.searchValue, this.getSuggestionCount(1, 5)).
            then(results => {
                this.setState({ 
                    suggestions: results.length > 0 ? results:null,
                    selection: results.length > 0 ? results[0]:null
                });
            }).catch(error => {
                console.log("Error: " + error);
            });
        } else {
            this.setState({
                suggestions: null,
                selection: null
            });
        }

    }

    render() {

        return (
            <div onKeyDown={(event) => event.key === 'Enter' ? this.confirmSelection():null}>
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
                searchInput={this.searchInput}
                updateSelection={this.displaySelection} /> : null}
            </div>
        );
    }
}

export default SearchBarContainer;