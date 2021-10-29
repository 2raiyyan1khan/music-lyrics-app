import React from "react";
import Hero from "./Hero";
import SearchBox from "./SearchBox";
import Tracks from "./Tracks";

const Home = () => {
  return (
    <div>
      <Hero>
        <h1>Find Favorite Music's Lyrics</h1>
        <SearchBox />
      </Hero>
      <Tracks />
    </div>
  );
};

export default Home;
