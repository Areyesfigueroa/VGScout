import React from "react";
import classes from "./GameInfo.module.css";

import SummaryContainer from '../../containers/SummaryContainer/SummaryContainer';
import InfoBox from "./InfoBox/InfoBox";

const gameInfo = (props) => {


    return (
        <div className={classes.GameInfo}>
            <SummaryContainer>
                {props.summary}
            </SummaryContainer>

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