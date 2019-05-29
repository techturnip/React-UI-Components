import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <aside class="sidebar">
        <ImageThumbnail />
      </aside>

      <section class="main">
        <header>
          <HeaderContainer />
        </header>
      </section>
    </div>
  );
};

export default App;