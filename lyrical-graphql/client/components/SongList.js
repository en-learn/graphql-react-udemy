import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = ({ data }) => {
  const renderSongs = () =>
    data.songs.map(song => <li>{song.title}</li>)
  return <div>{data.loading ? 'Loading...' : renderSongs()}</div>
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
