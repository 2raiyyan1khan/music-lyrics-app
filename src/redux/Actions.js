import * as ActionTypes from "./ActionType";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL =
  "https:cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/";

export const getTopTracks = () => {
  return (dispatch) => {
    fetch(
      URL +
        `chart.tracks.get?chart_name=top&apikey=${API_KEY}&page=1&page_size=10&country=in&f_has_lyrics=1`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionTypes.GET_TOP_TRACKS,
          payload: data,
        });
      })
      .catch((err) => console.log("Error", err));
  };
};

export const getTrackDetails = (trackId) => {
  return (dispatch) => {
    fetch(URL + `track.lyrics.get?commontrack_id=${trackId}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((lyrics) => {
        dispatch({
          type: ActionTypes.GET_TRACK_LYRICS,
          payload: lyrics,
        });

        fetch(URL + `track.get?commontrack_id=${trackId}&apikey=${API_KEY}`)
          .then((res) => res.json())
          .then((detail) => {
            dispatch({
              type: ActionTypes.GET_TRACK_DETAILS,
              payload: detail,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log("Error", err));
  };
};

export const searchTracks = (searchTerm, searchByTerm) => {
  return (dispatch) => {
    fetch(
      URL +
        `track.search?${searchByTerm}=${searchTerm}&page_size=10&page=1&s_track_rating=desc&apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionTypes.SEARCH_TRACKES,
          payload: data,
        });
      })
      .catch((err) => console.log("Error", err));
  };
};
