import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'
import gql from 'graphql-tag'

const SongList = ({ data, mutate }) => {
  const onSongDelete = id => {
    mutate({ variables: { id } }).then(() => data.refetch())
  }

  const renderSongs = () =>
    data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i className="material-icons" onClick={() => onSongDelete(id)}>
          delete
        </i>
      </li>
    ))

  return data.loading ? (
    <div>'Loading...'</div>
  ) : (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(graphql(query)(SongList))
