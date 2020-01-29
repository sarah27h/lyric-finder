import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrackContext } from '../../contexts/TrackContext';

const Track = ({ trackInfo }) => {
  const { selectedTrack, setSelectedTrack } = useContext(TrackContext);

  const handleClick = e => {
    setSelectedTrack(trackInfo);
  };

  console.log(selectedTrack);

  return (
    <li>
      <div>{trackInfo.track.artist_name}</div>
      <div>Track: {trackInfo.track.track_name}</div>
      <div>Album:{trackInfo.track.album_name}</div>
      <div>Rating:{trackInfo.track.track_rating}</div>
      <Link to={{ pathname: `/trackdetails/${trackInfo.track.track_id}`, param1: selectedTrack }}>
        <button onClick={handleClick}>> View Lyric</button>
      </Link>
    </li>
  );
};

export default Track;
