import React, { Component } from 'react'
import Card from './components/Card'

class App extends Component {

  state = {
    title: '',
    poster: '',
    plot: '',
    movies: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddMovie = event => {
    event.preventDefault()
    let movies = JSON.parse(JSON.stringify(this.state.movies))
    movies.push({
      title: this.state.title,
      poster: this.state.poster,
      plot: this.state.plot
    })
    this.setState({ movies, title: '', poster: '', plot: '' })
  }

  render () {
    return (
      <>
        <form>
          <p>
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="poster">Poster</label>
            <input 
              type="text" 
              name="poster"
              value={this.state.poster}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <label htmlFor="plot">Plot</label>
            <input 
              type="text" 
              name="plot"
              value={this.state.plot}
              onChange={this.handleInputChange} />
          </p>
          <p>
            <button onClick={this.handleAddMovie}>Add Movie</button>
          </p>
        </form>
        { this.state.movies.map(movie => <Card movie={movie} />) }
      </>
    )
  }
}

export default App
