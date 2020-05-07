import React from "react";
import classes from "./SearchBar.module.css";

const searchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <input
                ref={props.searchRef}
                type="search"
                placeholder="Search..."
                id="search"
                onChange={(event) => props.changed(event.target.value)} 
                onKeyUp={(event) => event.keyCode===13 ? props.search():null}/>

            <button 
            className={classes.searchButton} 
            onClick={props.search}>
                <ion-icon name="search-outline"></ion-icon>
            </button>

            <button 
            className={classes.cancelButton} 
            onClick={props.clear} 
            style={{visibility: props.showCancelBtn ? "visible":"hidden"}}>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    );
}

export default searchBar;