import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="header-container">
      <h1 className="header-title">Lambda School</h1>
      <span className="header-title-meta">@LambdaSchool &#183; 26 Jan</span>
    </div>
  )
}

export default HeaderTitle;