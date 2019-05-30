import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import './Footer.css';

function CommentIcon() {
  return (
    <span>
      <FontAwesomeIcon icon={faComment} />
    </span>
  )
}

export default CommentIcon;