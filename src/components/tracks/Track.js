import React from 'react';

const Track = ({ trackInfo }) => {
  return (
    <li>
      <div>{trackInfo.track.track_name}</div>
      <div>Track:</div>
      <div>Album:</div>
      <button>> View Lyric</button>
    </li>
  );
};

export default Track;
