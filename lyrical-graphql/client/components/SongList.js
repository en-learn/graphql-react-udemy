import React from 'react'
import gql from 'graphql-tag'

export const SongList = () => {
  return <div>SongList</div>
}

const query = gql`
  {
    songs {
      title
    }
  }
`
