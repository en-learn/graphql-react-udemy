import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

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
    <ul className="collection">{renderSongs()}</ul>
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
