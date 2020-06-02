import React, { Component } from 'react';
import classes from './RedditPost.module.css';

class RedditPost extends Component {

    state = {
        collapse: true
    }

    toggleCollapse = () => {
        let newValue = !this.state.collapse;
        this.setState({ collapse: newValue });
    }

    render() {

        return (
            <div className={classes.RedditPost}>
                <div className={classes.header}>
                    <div className={classes.postInfo}>
                        <p>{this.props.date}</p>
                        <p>{this.props.userName}</p>
                    </div>
                    <div className={classes.fullPostLink}>
                        <a className="button" href={this.props.fullPostURL}>View Full Post</a>
                    </div>
                </div>
                <h4>{this.props.title}</h4>
                <div className={`${classes.postContent} ${this.state.collapse ? classes.collapse:null}`}>
                    {this.props.img ? <img src={this.props.img} alt="reddit image"/>:null}
                    <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
                </div>
                <a className={"button"} onClick={this.toggleCollapse}>{this.state.collapse ? "more":"less"}</a>
            </div>
        );
    }
        
};

export default RedditPost;