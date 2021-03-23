import { Component } from 'react';
import Summary from '../../components/GameInfo/Summary/Summary';

interface Props {
    data: string;
}

interface State {
    expand: boolean;
}
class SummaryContainer extends Component<Props> {
   
    state: State = {
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