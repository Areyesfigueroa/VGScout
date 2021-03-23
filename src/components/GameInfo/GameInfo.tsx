import React from "react";
import classes from "./GameInfo.module.css";

import SummaryContainer from '../../containers/SummaryContainer/SummaryContainer';
import InfoBox from "./InfoBox/InfoBox";

interface Props {
    summary: string;
    developers: object[];
    publishers: object[];
    platforms: any;
    genres: object[];
};
const gameInfo: React.FC<Props> = (props) => {


    return (
        <div className={classes.GameInfo}>
            <SummaryContainer data={props.summary}/>

            <div className={classes.InfoBoxContainer}>
                <InfoBox title="Developers:" data={props.developers}/>
                <InfoBox title="Publishers:" data={props.publishers}/>
                <InfoBox title="Platforms:" data={props.platforms}/>
                <InfoBox title="Genres:" data={props.genres}/>
            </div>
        </div>
    )
};

export default gameInfo;