import React from 'react'
import classes from './RedditPostsMenu.module.css'

const redditPostsMenu = (props) => (
  <div
    className={classes.RedditPostsMenu}
    style={props.show ? { backgroundColor: '#333A41' } : null}
    onClick={props.clicked}
  >
    <div className={classes.clickable}>
      <div className='text'>Reddit Posts {props.count}</div>
    </div>
    <div className={classes.button}>
      <div className='button'>{props.show ? 'X' : 'expand'}</div>
    </div>
  </div>
)

export default redditPostsMenu
