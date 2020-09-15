import React from 'react'

const Card = props => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.movie.Poster} className="card-img-top" alt={props.movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{props.movie.Title}</h5>
        <p className="card-text">{props.movie.Plot}</p>
      </div>
    </div>
  )
}

export default Card

 