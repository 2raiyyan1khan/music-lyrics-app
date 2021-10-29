import React from "react";
import { Container } from "./styles/Container";
import { StyledFooter } from "./styles/StyledFooter";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <small>
          &copy; {new Date().getFullYear()} Made By Mohammad Raiyyan
        </small>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
