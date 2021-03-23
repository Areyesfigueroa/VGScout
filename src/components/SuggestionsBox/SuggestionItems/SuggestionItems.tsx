import SuggestionItem from "./SuggestionItem/SuggestionItem";

interface Suggestion {
    id: any;
    short_screenshots: any;
    name: any;
};

interface Props {
    data: any;
    clicked: any;
    navSelection: any;
    styleSelection: any;
};
const suggestionItems: React.FC<Props> = (props) => {

    return props.data.map((suggestion: Suggestion, idx: number) => {
        return (
            <SuggestionItem
            key={suggestion.id}
            id={idx}
            img={suggestion.short_screenshots.length > 0 ? suggestion.short_screenshots[0].image:null}
            name={suggestion.name}
            clicked={props.clicked}
            navSelection={props.navSelection}
            styleSelection={props.styleSelection}/>
        )
    });
}

export default suggestionItems;