import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

import './Header.css';

function HeaderContainer() {
  return (
    <header>
      <div className="img-thumbnail">
        <ImageThumbnail />
      </div>
      <div className="content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
}

export default HeaderContainer;