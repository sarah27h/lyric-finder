import React from 'react';

const Track = ({ trackInfo }) => {
  return (
    <li>
      <div>{trackInfo.track.artist_name}</div>
      <div>Track: {trackInfo.track.track_name}</div>
      <div>Album:{trackInfo.track.album_name}</div>
      <div>Rating:{trackInfo.track.track_rating}</div>
      <button>> View Lyric</button>
    </li>
  );
};

export default Track;
