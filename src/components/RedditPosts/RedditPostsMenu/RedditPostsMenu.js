import React, { Component } from 'react';
import classes from './RedditPostsMenu.module.css';

class RedditPostsMenu extends Component {

    state = {
        hightlightBG: false
    }
    element = React.createRef();
    bgStyle = null;

    componentDidMount() {
        let initialPos = this.element.current.offsetTop;
        window.addEventListener('scroll', () => this.changeBackground(initialPos));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeBackground);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.hightlightBG !== this.state.hightlightBG) {
            //Change background
            this.bgStyle = this.state.hightlightBG ? { backgroundColor: "rgba(0,0,0,1)" }:null;
        }
    }

    changeBackground = (initPos) => {
        if(initPos >= this.element.current.offsetTop) {
            //Default BG
            this.setState({ hightlightBG: false });
        } else {
            //Change Background
            this.setState({ hightlightBG: true });
        }
    }

    render() {
        return (
            <div ref={this.element} className={classes.RedditPostsMenu} style={this.bgStyle}>
                <div>
                    <p>Reddit Posts {this.props.count}</p>
                </div>
                <div>
                    <p>
                        <a className="button" onClick={this.props.clicked}> {this.props.show ? "X":"expand"} </a>
                    </p>
                </div>
            </div>
        );
    }
};

export default RedditPostsMenu;