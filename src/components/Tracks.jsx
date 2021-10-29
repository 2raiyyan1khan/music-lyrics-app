import React from "react";
import Track from "./Track";
import { Container } from "./styles/Container";
import { StyledTracks, StyledTracksContainer } from "./styles/StyledTracks";
import Loading from "./Loading";
import { connect } from "react-redux";
import { getTopTracks } from "../redux/Actions";
import { useEffect } from "react";
const Traks = ({ trackList, pageTitle, getTopTracks }) => {
  useEffect(() => {
    getTopTracks();
  }, [trackList]);

  return (
    <Container>
      <StyledTracksContainer>
        <h3>{pageTitle}</h3>

        {trackList?.length === 0 || trackList === undefined ? (
          <Loading />
        ) : (
          <StyledTracks>
            {trackList.map((tracks) => (
              <Track track={tracks.track} key={tracks.track.track_id} />
            ))}
          </StyledTracks>
        )}
      </StyledTracksContainer>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    trackList: state.trackList,
    pageTitle: state.pageTitle,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTopTracks: () => dispatch(getTopTracks()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Traks);
