import React from 'react';
import reactlogo from '../../assets/react-logo.png';
import './Card.css';

function CardBanner() {
  return (
    <div className="card-banner">
      <img className="banner-img" src={reactlogo} alt="React Logo" />
    </div>
  )
}

export default CardBanner;