import React from "react";
import classes from "./SearchBar.module.css";

const searchBar = (props) => {

    return (
        <div className={classes.SearchBar}>
            <label htmlFor="search">Search:</label>
            <input
                type="search"
                placeholder="Search..."
                id="search"
                onChange={(event) => props.changed(event.target.value)} />
            <button onClick={props.clicked}>Search!</button>
        </div>
    );
}

export default searchBar;