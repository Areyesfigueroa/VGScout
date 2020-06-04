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

    changeBackground = (initPos) => {
        if(initPos >= this.element.current.offsetTop && !this.props.show) {
            //Default BG
            this.setState({ hightlightBG: false });
        } else {
            //Change Background
            this.setState({ hightlightBG: true });
        }
    }

    render() {
        return (
            <div 
            ref={this.element} 
            className={classes.RedditPostsMenu} 
            style={this.state.hightlightBG ? { backgroundColor: "rgba(0,0,0,1)" }:null} 
            onClick={this.props.clicked}
            >
                <div className={classes.clickable}>
                    <a href="#redditPostsSection" className="text">Reddit Posts {this.props.count}</a>
                </div>
                <div className={classes.button}>
                    <a href="#redditPostsSection" className="button"> {this.props.show ? "X":"expand"} </a>
                </div>
            </div>
        );
    }
};

export default RedditPostsMenu;