import React from "react";
import { Link } from "react-router-dom";
import { StyledTrack } from "./styles/StyledTrack";
const Track = ({ track }) => {
  return (
    <Link to={`/track/${track.commontrack_id}`}>
      <StyledTrack>
        <strong>Track:</strong>
        <span>
          {track.track_name?.length > 40
            ? `${track.track_name.substring(0, 40)}...`
            : track.track_name}
        </span>
        <br />
        <strong>Artist:</strong>
        <span>
          {track.artist_name?.length > 40
            ? `${track.artist_name.substring(0, 40)}...`
            : track.artist_name}
        </span>
        <br />
        <strong>Album:</strong>
        <span>
          {track.album_name?.length > 40
            ? `${track.album_name.substring(0, 40)}...`
            : track.album_name}
        </span>
        <br />
        <strong>Genere:</strong>
        <span>
          {track?.primary_genres?.music_genre_list[0]?.music_genre
            ?.music_genre_name || "N/A"}
        </span>
        <br />
      </StyledTrack>
    </Link>
  );
};

export default Track;
