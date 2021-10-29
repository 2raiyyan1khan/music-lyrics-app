import React from "react";
import { StyledLoading } from "./styles/StyledLoading";
import Spinner from "react-spinkit";
const Loading = () => {
  return (
    <StyledLoading>
      <Spinner name="line-scale-pulse-out" size={50} />
    </StyledLoading>
  );
};

export default Loading;
