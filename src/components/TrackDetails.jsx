import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getTrackDetails } from "../redux/Actions";
import Hero from "./Hero";
import Loading from "./Loading";
import { Container } from "./styles/Container";
import { StyledLyrics } from "./styles/StyledLyrics";
const TrackDetails = ({ trackLyrics, trackDetail, getTrackDetails }) => {
  const { id } = useParams();
  useEffect(() => {
    getTrackDetails(id);
  }, [id, trackLyrics, trackDetail]);

  if (
    Object.keys(trackDetail).length === 0 ||
    Object.keys(trackLyrics).length === 0 ||
    trackDetail === undefined ||
    trackLyrics === undefined
  ) {
    return <Loading />;
  }
  return (
    <>
      <Hero>
        <h1>{trackDetail.track_name}</h1>
        <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: "bold" }}>
          {trackDetail.artist_name}
        </p>
      </Hero>
      <Container>
        <StyledLyrics>
          <div>
            <h4>{trackLyrics.lyrics_body}</h4>
          </div>
        </StyledLyrics>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    trackLyrics: state.trackLyrics,
    trackDetail: state.trackDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTrackDetails: (trackId) => dispatch(getTrackDetails(trackId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackDetails);
