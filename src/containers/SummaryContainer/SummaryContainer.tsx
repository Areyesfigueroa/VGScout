import React, { Component } from 'react';
import Summary from '../../components/GameInfo/Summary/Summary';

class SummaryContainer extends Component {
   
    state = {
        expand: false
    }
   
    toggleExpansion = () => {
        let expandVal = !this.state.expand;
        this.setState({ expand: expandVal });
    }

    render() {
        return (
            <Summary 
            expand={this.state.expand} 
            clicked={this.toggleExpansion}
            data={this.props.data} />
        );
    }
};

export default SummaryContainer;