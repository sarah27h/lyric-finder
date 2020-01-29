import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TrackContext } from '../../contexts/TrackContext';

const TrackDetails = () => {
  const { selectedTrack } = useContext(TrackContext);
  console.log(selectedTrack);
  return (
    <Fragment>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <div>
        {selectedTrack === undefined ? (
          <p>loading ...</p>
        ) : (
          <h3>
            {selectedTrack.track.track_name} by {selectedTrack.track.artist_name}
          </h3>
        )}
        <p>lyrics.............</p>
        <div>Album Id: </div>)
      </div>
    </Fragment>
  );
};

export default TrackDetails;
