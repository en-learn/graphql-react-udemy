import React, { Component } from 'react'
import gql from 'graphql-tag'

class SongCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  onSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation {
    addSong(title:) {
      // ???
    }
  }
`

export default SongCreate
