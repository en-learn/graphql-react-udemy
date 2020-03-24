import React, { Component } from 'react'
import gql from 'graphql-tag'

class LyricList extends Component {
  onLike(id) {
    console.log(id)
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
        <i onClick={() => this.onLike(id)} className="material-icons">
          thumb_up
        </i>
      </li>
    ))
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`

export default LyricList
