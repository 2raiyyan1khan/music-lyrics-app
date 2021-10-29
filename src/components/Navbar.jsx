import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles/Container";
import { StyledNavbar } from "./styles/StyledNavbar";
import { FiMusic } from "react-icons/fi";
const Navbar = () => {
  const [height, setHeight] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <StyledNavbar className={`${height >= 66 ? "nav" : ""}`}>
      <Container>
        <Link to="/">
          <FiMusic size={35} />
          <span>Lyricsy</span>
        </Link>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
