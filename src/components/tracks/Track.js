import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ trackInfo }) => {
  return (
    <li>
      <div>{trackInfo.track.artist_name}</div>
      <div>Track: {trackInfo.track.track_name}</div>
      <div>Album:{trackInfo.track.album_name}</div>
      <div>Rating:{trackInfo.track.track_rating}</div>
      {/* to pass props to <Link> react router use state - not any name you want - 
      to prevent props to be empty undefined after refesh page */}
      <Link
        to={{
          pathname: `/trackdetails/${trackInfo.track.track_id}`,
          state: trackInfo
        }}
      >
        <button>> View Lyric</button>
      </Link>
    </li>
  );
};

export default Track;
