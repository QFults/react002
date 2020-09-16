import React, { Component } from 'react'
import Card from './components/Card'
import axios from 'axios'

class App extends Component {

  state = {
    title: '',
    movie: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${this.state.title}`)
      .then(({ data }) => {
        this.setState({ movie: data, title: '' })
      })
      .catch(err => console.error(err))
  }

  componentDidMount () {
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t=Goodfellas')
      .then(({ data }) => {
        this.setState({ movie: data })
      })
      .catch(err => console.error(err))
  }

  render() {
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
            <button onClick={this.handleSearchMovie}>Search Movie</button>
          </p>
        </form>
        <Card movie={this.state.movie} />
      </>
    )
  }
}

export default App
