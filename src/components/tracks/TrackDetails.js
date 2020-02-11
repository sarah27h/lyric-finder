import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrackDetails = ({ location: { state }, match }) => {
  const API_KEY = process.env.REACT_APP_MUSICXMATCH_KEY;
  const [lyrics, setLyrics] = useState({});
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        match.params.id
      }&apikey=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setLyrics(data.message.body.lyrics))
      .catch(err => console.log(err));
    // to disable the warning rule of missing dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <div>
        {state === undefined && lyrics === undefined ? (
          <p>loading ...</p>
        ) : (
          <div>
            <h3>
              {state.track.track_name} by {state.track.artist_name}
            </h3>
            {/* <img src={lyrics.pixel_tracking_url} alt="" /> */}
            <p>lyrics: {lyrics.lyrics_body}</p>
            <div>Album Id: {state.track.album_id}</div>
            <div>
              <p>
                <span>Song Genre: </span>
                {state.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
              </p>
              <p>
                <span>Explicit Words: </span>
                {state.track.explicit === 0 ? 'No' : 'Yes'}
              </p>
              <p>
                <span>Favourite Numbers: </span>
                {state.track.num_favourite}
              </p>
              <p>
                <span>Track Link: </span>
                <a href={state.track.track_share_url}>visit</a>
              </p>
              <p>
                <span>Update Time: </span>
                {state.track.updated_time}
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default TrackDetails;
