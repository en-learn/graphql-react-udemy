import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

const SongList = ({ data }) => {
  const renderSongs = () =>
    data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
      </li>
    ))

  return data.loading ? (
    <div>'Loading...'</div>
  ) : (
    <div>
    <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new"
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
