import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ trackInfo }) => {
  return (
    <li>
      <div>{trackInfo.track.artist_name}</div>
      <div>Track: {trackInfo.track.track_name}</div>
      <div>Album:{trackInfo.track.album_name}</div>
      <div>Rating:{trackInfo.track.track_rating}</div>
      <Link to={`/trackdetails/${trackInfo.track.track_id}`}>
        <button>> View Lyric</button>
      </Link>
    </li>
  );
};

export default Track;
