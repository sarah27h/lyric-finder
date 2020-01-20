import React, { useContext, Fragment } from 'react';
import Track from './Track';
import { TrackContext } from '../../contexts/TrackContext';

const Tracks = () => {
  const { heading, tracks } = useContext(TrackContext);

  const tracksList = tracks.map(trackInfo => {
    return <Track trackInfo={trackInfo} key={trackInfo.track.track_id} />;
  });
  return (
    <Fragment>
      <p>{heading}</p>
      {tracks.length ? <ul>{tracksList}</ul> : <p>loading...</p>}
    </Fragment>
  );
};

export default Tracks;
