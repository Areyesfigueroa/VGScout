import React from "react";
import classes from "./SearchBar.module.css";
import SuggestionsContainer from "../../containers/SearchBarContainers/SuggestionsContainer/SuggestionsContainer";

const searchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <input
                className={props.suggestions ? classes.collapseSearch: classes.defaultSearch}
                ref={props.searchRef}
                type="search"
                placeholder="Search..."
                id="search"
                onChange={(event) => props.search(event.target.value)} 
                onKeyUp={(event) => event.keyCode===13 ? props.select():null}/>

            <button 
            className={classes.searchButton} 
            onClick={props.select}>
                <ion-icon name="search-outline"></ion-icon>
            </button>

            <button 
            className={classes.cancelButton} 
            onClick={props.clear} 
            style={{visibility: props.showCancelBtn ? "visible":"hidden"}}>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            {/* If suggestions are passed then enable them. */}
            {props.suggestions ? (<SuggestionsContainer data={props.suggestions}/>):null}
            
        </div>
    );
}

export default searchBar;