import { Component } from "react";
import SuggestionsBox from "../../components/SuggestionsBox/SuggestionsBox";

/**
 * If the item is selected already and I click on it
 * confirm selection.
 * 
 * Identify the selectedItem
 * 
 */

interface Props {
    searchInput: {current: HTMLInputElement};
    data: object[];
    updateSelection: (selectedID: number) => void;
    confirmSelection: () => void;
}

interface State {
    selectedID: number;
}

class SuggestionsBoxContainer extends Component<Props> {

    state: State = {
        selectedID: 0
    }
    
    componentDidMount() {
        this.props.searchInput.current.addEventListener("keydown", this.navArrowSelection);
    }

    componentWillUnmount() {
        this.props.searchInput.current.removeEventListener("keydown", this.navArrowSelection);
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if(prevState.selectedID !== this.state.selectedID) {
            this.props.updateSelection(this.state.selectedID);
        }
    }

    navArrowSelection = (event: any) => {
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

    navClickSelection = (event: any) => {
        if(!event.target) return;
        const elementID = parseInt(event.target.closest("div").id);
        if(this.state.selectedID === elementID) {
            // console.log("Confirm Selection");
            this.props.confirmSelection();
        } else {
            // console.log("Update Selection");
            this.setState({ selectedID: elementID });
        }
    }

    //Handle the hightlighted selection.
    styleSelection = (id: number) => {
        if(this.state.selectedID === id){
            return { 
                backgroundColor: "rgba(128, 205, 250, 0.5)",
                fontWeight: "bold",
                color: "white"
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
            styleSelection={this.styleSelection}
            navSelection={this.navArrowSelection}
            clicked={this.navClickSelection}
            />
        )
    }
}

export default SuggestionsBoxContainer;