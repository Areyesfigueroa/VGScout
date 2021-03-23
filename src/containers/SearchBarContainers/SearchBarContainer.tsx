import React, { Component } from "react";

import SearchBar from '../../components/SearchBar/SearchBar';
import SuggestionsBoxContainer from '../SuggestionBoxContainer/SuggestionBoxContainer';
import { loadSuggestions, addDelay } from "../../utils";

interface Props {
    selectedValue: (newValue: {id: any}) => void;
    suggestionCount: number;
    searchDelay: number;
}
interface State {
    searchValue: string;
    prevSearchValue: string;
    prevSelection: string;
    selection: any;
    suggestions: any;
}
class SearchBarContainer extends Component<Props> {

    state: State = {
        searchValue: '',
        prevSearchValue: '',
        prevSelection: '',
        selection: null,
        suggestions: []
    }

    searchInput:any = React.createRef<HTMLInputElement>();
    timerID:NodeJS.Timeout | null = null;

    componentDidUpdate(prevProps: Props, prevState: State) {
        if(this.state.searchValue !== prevState.searchValue) {
            this.search();
        }
    }

    displaySelection = (selectionIdx: number) => {
        let result: {name: string} = this.state.suggestions[selectionIdx];
        this.searchInput.current.value = result.name;
        this.setState({
            selection: result
        });
    }

    confirmSelection = () => {
        if(!this.state.selection) return;

        this.props.selectedValue(this.state.selection);
        this.setState({ suggestions: null });
    }

    handleSearch = (newSearchValue: any) => {
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

    getSuggestionCount(min: number, max: number) {
        if(this.props.suggestionCount > max) return max;
        if(this.props.suggestionCount < min) return min;

        return this.props.suggestionCount;
    }

    //Query search
    search = () => {

        if(this.state.searchValue.length > 0) {
            //API Query
            loadSuggestions(this.state.searchValue, this.getSuggestionCount(1, 5))
            .then(results => {
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
            <div onKeyDown={(event: any) => event.key === 'Enter' ? this.confirmSelection():null}>
            
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
                updateSelection={this.displaySelection}
                confirmSelection={this.confirmSelection} /> : null}
            </div>
        );
    }
}

export default SearchBarContainer;