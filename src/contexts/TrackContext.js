import React, { createContext, useState } from 'react';

export const TrackContext = createContext();

const TrackContextProvider = props => {
  // state for tracks
  const [tracks, setTracks] = useState([
    { track: { track_name: 'abc' } },
    { track: { track_name: '123' } }
  ]);

  // state for heading
  const [heading, setHeading] = useState(['Top 10 Tracks']);

  return (
    <TrackContext.Provider value={{ tracks, heading }}>{props.children}</TrackContext.Provider>
  );
};

export default TrackContextProvider;
