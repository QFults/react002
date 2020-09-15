import React from 'react'

const Card = props => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.movie.poster} className="card-img-top" alt={props.movie.title} />
      <div className="card-body">
        <h5 className="card-title">{props.movie.title}</h5>
        <p className="card-text">{props.movie.plot}</p>
      </div>
    </div>
  )
}

export default Card

 