import React, { createContext, useState } from 'react';

export const TrackContext = createContext();

const TrackContextProvider = props => {
  // state for tracks
  const [tracks, setTracks] = useState([]);

  const searchforLyric = tracks => {
    console.log(tracks);
  };

  const API_KEY = process.env.REACT_APP_MUSICXMATCH_KEY;

  // state for heading
  const [heading, setHeading] = useState(['Top 10 Tracks']);

  return (
    <TrackContext.Provider value={{ tracks, heading }}>{props.children}</TrackContext.Provider>
  );
};

export default TrackContextProvider;
