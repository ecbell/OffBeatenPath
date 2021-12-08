import React from 'react'
import TrailIndexItem from './trail_index_item'
import { Link } from 'react-router-dom'

const TrailIndex = (props) => {
  return(
    props.allTrails.map(trail => {
      return <TrailIndexItem trail={trail} park={props.park} parks={props.parks} key={trail.id} />
    })
  )
}

export default TrailIndex