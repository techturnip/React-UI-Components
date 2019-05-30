import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import './Footer.css';

function MessageIcon() {
  return (
    <span>
      <FontAwesomeIcon icon={faEnvelope} />
    </span>
  )
}

export default MessageIcon;