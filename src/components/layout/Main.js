import React from 'react';
import Header from './Header';
import Search from '../tracks/Search';
import Tracks from '../tracks/Tracks';
import Footer from './Footer';
import TrackContextProvider from '../../contexts/TrackContext';

const Main = () => {
  return (
    <div>
      <TrackContextProvider>
        <Header />
        <Search />
        <Tracks />
        <Footer />
      </TrackContextProvider>
    </div>
  );
};

export default Main;
