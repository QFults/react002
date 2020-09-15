import React from 'react'
import Card from './components/Card'

let movies = [
  {
    title: 'Goodfellas',
    plot: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
  },
  {
    title: 'The Room',
    plot: 'Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his future wife Lisa. One day she unscrupulously seduces his best friend Mark. Nothing will ever be the same again.',
    poster: 'https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_SX300.jpg'
  }
]

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      { movies.map(movie => <Card movie={movie} />) }
    </>
  )
}

export default App
