import React, { Fragment, useState, useEffect, useContext } from 'react';
import { TrackContext } from '../../contexts/TrackContext';

const Search = () => {
  const [songTitle, setSongTitle] = useState('');
  const [fetchedTracks, setFetchedTracks] = useState([]);
  const { setTracks, setHeading } = useContext(TrackContext);
  const API_KEY = process.env.REACT_APP_MUSICXMATCH_KEY;

  // pass songTitle in the dependencies
  // to send fetch request when songTitle change
  // which depend on uer input
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setFetchedTracks(data.message.body.track_list))
      .catch(err => console.log(err));
  }, [songTitle]);

  const handleChange = e => {
    setSongTitle(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setHeading('Search Results');
    setTracks(fetchedTracks);
    setSongTitle('');
  };
  return (
    <Fragment>
      <h3>Search for A Song</h3>
      <p>Get the lyrics for any track</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="songTitle"
          value={songTitle}
          placeholder="song title ...."
          aria-label="song title"
          onChange={handleChange}
        />
        <button type="submit">Get Track Lyrics</button>
      </form>
    </Fragment>
  );
};

export default Search;
