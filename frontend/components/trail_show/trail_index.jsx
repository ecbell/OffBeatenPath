import React from 'react'
import TrailIndexItem from './trail_index_item'
import { Link } from 'react-router-dom'

const TrailIndex = (props) => {
  console.log(props.allTrails)
  return(
    props.allTrails.map(trail => {
      return <TrailIndexItem trail={trail} key={trail.id} />
      console.log(trail)
    })
  )
}

export default TrailIndex