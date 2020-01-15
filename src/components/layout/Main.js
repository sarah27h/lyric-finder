import React from 'react';
import Header from './Header';
import Search from '../tracks/Search';
import Tracks from '../tracks/Tracks';
import Footer from './Footer';

const Main = () => {
  return (
    <div>
      TrackDetails
      <Header />
      <Search />
      <Tracks />
      <Footer />
    </div>
  );
};

export default Main;
