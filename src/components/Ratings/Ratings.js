import React from 'react'
import classes from './Ratings.module.css'
import metacriticLogo from '../../assets/metacriticLogo.png'

const ratings = (props) => {
  const ratings = {
    exceptional: 0,
    recommended: 0,
    meh: 0,
    skip: 0
  }

  console.log({ log: 'before', propsRatings: props.ratings, ratings })
  if (props.ratings.length > 0) {
    props.ratings.forEach((rating) => {
      if (ratings[rating.title] === undefined) return
      ratings[rating.title] = rating.percent
    })
  }
  console.log({ log: 'after', propsRatings: props.ratings, ratings })

  const metacriticScore = props.metacritic ? props.metacritic : 0
  const thumbsUp =
    parseInt(ratings.exceptional + ratings.recommended) > 100
      ? 100
      : parseInt(ratings.exceptional + ratings.recommended)
  const thumbsDown =
    parseInt(ratings.meh + ratings.skip) > 100
      ? 100
      : parseInt(ratings.meh + ratings.skip)

  return (
    <div className={classes.Ratings}>
      <div>
        <img src={metacriticLogo} alt='Metacritic Logo' />
        <p>{metacriticScore}</p>
      </div>
      <div>
        <ion-icon name='thumbs-up-sharp'></ion-icon>
        <p>{thumbsUp}%</p>
      </div>
      <div>
        <ion-icon name='thumbs-down-sharp'></ion-icon>
        <p>{thumbsDown}%</p>
      </div>
    </div>
  )
}

export default ratings
