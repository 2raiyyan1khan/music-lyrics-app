import React from "react";

import { Container } from "./styles/Container";
import { StyledHero } from "./styles/StyledHero";

const Hero = ({ children }) => {
  return (
    <StyledHero>
      <Container>{children}</Container>
    </StyledHero>
  );
};

export default Hero;
