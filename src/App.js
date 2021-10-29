import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrackDetails from "./components/TrackDetails";
import { Global } from "./components/styles/GlobalStyle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/track/:id" exact>
          <TrackDetails />
        </Route>
        <Route />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
