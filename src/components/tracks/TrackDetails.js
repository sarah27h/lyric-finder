import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const TrackDetails = () => {
  return (
    <Fragment>
      <div>TrackDetails</div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </Fragment>
  );
};

export default TrackDetails;
