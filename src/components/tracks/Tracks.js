import React, { useContext, Fragment } from 'react';
import Track from './Track';
import { TrackContext } from '../../contexts/TrackContext';

const Tracks = () => {
  const { heading, tracks } = useContext(TrackContext);

  const tracksList = tracks.map((trackInfo, index) => {
    return <Track trackInfo={trackInfo} key={index} />;
  });
  return (
    <Fragment>
      <p>{heading}</p>
      {tracks.length ? <ul>{tracksList}</ul> : <p>no tracks</p>}
    </Fragment>
  );
};

export default Tracks;
