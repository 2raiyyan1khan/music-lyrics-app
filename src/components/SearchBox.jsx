import React from "react";
import {
  Input,
  StyledSearchBox,
  SearchOptions,
} from "./styles/StyledSearchBox";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { searchTracks } from "../redux/Actions";
import { connect } from "react-redux";
const SearchBox = ({ searchTracks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByTerm, setSearchByTerm] = useState("q_artist");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      searchTracks(searchTerm, searchByTerm);
    } else {
      alert("Please enter artist name to search tracks!");
    }
    setSearchTerm("");
  };
  return (
    <StyledSearchBox>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="Search Lyrics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button type="submit">
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <SearchOptions>
          <span>
            <input
              type="radio"
              name="search-term"
              id="search-by-artist"
              value="q_artist"
              checked={searchByTerm === "q_artist"}
              onChange={(e) => setSearchByTerm(e.target.value)}
            />
            <label htmlFor="search-by-artist">Search By Artist</label>
          </span>
          <span>
            <input
              type="radio"
              name="search-term"
              value="q_track"
              checked={searchByTerm === "q_track"}
              onChange={(e) => setSearchByTerm(e.target.value)}
            />
            <label htmlFor="search-by-title">Search By Title</label>
          </span>
        </SearchOptions>
      </form>
    </StyledSearchBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTracks: (searchTerm, searchByTerm) =>
      dispatch(searchTracks(searchTerm, searchByTerm)),
  };
};
export default connect(null, mapDispatchToProps)(SearchBox);
