import * as ActionTypes from "./ActionType";

const initialState = {
  trackList: [],
  trackLyrics: {},
  trackDetail: {},
  pageTitle: "Top Trending Tracks",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TOP_TRACKS:
      console.log("top", action.payload);
      let {
        message: {
          body: { track_list },
        },
      } = action.payload;
      return {
        ...state,
        trackList: track_list,
      };
    case ActionTypes.GET_TRACK_LYRICS:
      console.log("lr", action.payload);
      let { message } = action.payload;
      return {
        ...state,
        trackLyrics: message.body.lyrics,
      };
    case ActionTypes.GET_TRACK_DETAILS:
      console.log("de", action.payload);
      let {
        message: {
          body: { track },
        },
      } = action.payload;
      return {
        ...state,
        trackDetail: track,
      };
    case ActionTypes.SEARCH_TRACKES:
      console.log("tr", action.payload);
      let {
        message: {
          body: { track_list: searchedTrack },
        },
      } = action.payload;
      return {
        ...state,
        trackList: searchedTrack,
        pageTitle: "Searched Tracks",
      };

    default:
      return state;
  }
};
