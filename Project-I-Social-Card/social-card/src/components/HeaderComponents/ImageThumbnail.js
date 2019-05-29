import React from 'react';
import logo from '../../assets/lambdalogo.jpeg';
import '../../App.css';

function ImageThumbnail() {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  )
}

export default ImageThumbnail;