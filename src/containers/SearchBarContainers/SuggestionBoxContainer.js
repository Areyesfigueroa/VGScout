import React, { Component } from "react";
import SuggestionsBox from "../../components/SuggestionsBox/SuggestionsBox";

class SuggestionsBoxContainer extends Component {

    state = {
        selectedID: 0
    }
    
    componentDidMount() {
        this.props.searchInput.current.addEventListener("keydown", this.navArrowSelection);
    }

    componentWillUnmount() {
        this.props.searchInput.current.removeEventListener("keydown", this.navArrowSelection);
    }

    navArrowSelection = (event) => {
        if(!event.target.closest("div")) return;

        let id = this.state.selectedID;
        //When enter is pressed.

        if(event.keyCode === 38) {            
            //Arrow up
            id = ((id-1) < 0) ? id:id-1;  
            this.setState({ selectedID: id });

        }

        if(event.keyCode === 40) {
            //Arrow down
            id = ((id+1) > this.props.data.length - 1) ? id:id + 1;  
            this.setState({ selectedID: id });
        }
    }

    navClickSelection = (event) => {
        if(!event.target) return;
        this.setState({ selectedID: parseInt(event.target.closest("div").id) });
    }

    //Handle the hightlighted selection.
    styleSelection = (id) => {
        if(this.state.selectedID === id){
            return { 
                backgroundColor: "rgba(128, 205, 250, 0.5)",
                fontWeight: "bold" 
            };
        } else {
            return {
                backgroundColor: "white"
            }
        }
    }

    render() {
        return (
            <SuggestionsBox 
            data={this.props.data} 
            // suggestionBoxRef={this.suggestionBoxRef} 
            styleSelection={this.styleSelection}
            navSelection={this.navArrowSelection}
            clicked={this.navClickSelection}
            />
        )
    }
}

export default SuggestionsBoxContainer;