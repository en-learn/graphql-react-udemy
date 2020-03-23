import React from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'
import { Link } from 'react-router'

import LyricCreate from './LyricCreate'

const SongDetail = ({ data }) => {
  const { song } = data

  if (!song) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricCreate />
    </div>
  )
}

export default graphql(fetchSong, {
  options: props => ({ variables: { id: props.params.id } }),
})(SongDetail)
