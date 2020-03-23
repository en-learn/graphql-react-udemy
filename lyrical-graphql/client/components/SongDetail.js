import React from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'

const SongDetail = ({ data }) => {
  const { song } = data

  if (!song) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h3>{song.title}</h3>
    </div>
  )
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail)
