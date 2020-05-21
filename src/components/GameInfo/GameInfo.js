import React from "react";
import classes from "./GameInfo.module.css";

import SummaryContainer from '../../containers/SummaryContainer/SummaryContainer';

const gameInfo = (props) => {


    return (
        <div className={classes.GameInfo}>
            <SummaryContainer>
                {props.summary}
            </SummaryContainer>
            {/* Developer/Publisher section

            Platform Section

            Genre Section */}
        </div>
    )
};

export default gameInfo;