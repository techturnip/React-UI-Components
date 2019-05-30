import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './Footer.css';

function LikeIcon() {
  return (
    <span>
      <FontAwesomeIcon icon={faHeart} /> 4
    </span>
  )
}

export default LikeIcon;