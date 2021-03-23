import classes from "./SuggestionsBox.module.css";
import SuggestionItems from "./SuggestionItems/SuggestionItems";

interface Props {
    data: any;
    clicked: any;
    styleSelection: any;
    navSelection: any;
    suggestionBoxRef?: any;
};
const suggestionsBox: React.FC<Props> = (props) => {

    return (
    <div className={classes.SuggestionsBox} ref={props.suggestionBoxRef}>
        <SuggestionItems 
        data={props.data} 
        clicked={props.clicked} 
        styleSelection={props.styleSelection}
        navSelection={props.navSelection}/>
    </div>
)};

export default suggestionsBox;