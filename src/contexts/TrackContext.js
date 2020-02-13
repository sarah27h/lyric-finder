import React, { createContext, useState, useEffect } from 'react';
export const TrackContext = createContext();

const TrackContextProvider = props => {
  // state for tracks
  const [tracks, setTracks] = useState([]);

  // note: after creating a environment variable you have to reset server to avoid getting 401 auth error
  const API_KEY = process.env.REACT_APP_MUSICXMATCH_KEY;

  // fetch top 10 tracks from musixmatch API & setTracks with data returned

  // I get an error >> CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
  // to solve I use a proxy https://cors-anywhere.herokuapp.com/ put in front of my request link
  // see link https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
  // or using install the Allow-Control-Allow-Origin: * extension for chrome:

  // to avoid endlessly loop pass an [] as a second argument
  // you enter in endlessly loop because you update state in useEffect it causes component to re-rendered
  // and this causes useEffect to execute again
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=fr&f_has_lyrics=1&apikey=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setTracks(data.message.body.track_list))
      .catch(err => console.log(err));
    // to disable the warning rule of missing dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // state for heading
  const [heading, setHeading] = useState(['Top 10 Tracks']);

  return (
    <TrackContext.Provider value={{ tracks, setTracks, heading, setHeading }}>
      {props.children}
    </TrackContext.Provider>
  );
};

export default TrackContextProvider;
