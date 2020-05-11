import React from "react";
import classes from "./SearchBar.module.css";

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
                onKeyUp={(event) => event.key==='Enter' ? props.select(0):null}/>

            <button 
            className={classes.searchButton} 
            onClick={()=>props.select(0)}>
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