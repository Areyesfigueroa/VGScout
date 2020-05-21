import React, { Component } from 'react';
import Summary from '../../components/Summary/Summary';

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
            textContent={this.props.children} />
        );
    }
};

export default SummaryContainer;