import React from 'react'
import CommentIcon from './CommentIcon';
import './Footer.css';
import RepostIcon from './RepostIcon';
import LikeIcon from './LikeIcon';
import MessageIcon from './MessageIcon';

function Footer() {
  return (
    <div className="icons">
      <CommentIcon />
      <RepostIcon />
      <LikeIcon />
      <MessageIcon />
    </div>
  )
}

export default Footer;