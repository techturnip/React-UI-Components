import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
import './Footer.css';

function RepostIcon() {
  return (
    <span>
      <FontAwesomeIcon icon={faShareSquare} /> 6
    </span>
  )
}

export default RepostIcon;