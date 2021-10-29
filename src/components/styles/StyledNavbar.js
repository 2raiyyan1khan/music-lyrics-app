import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 5px 0;
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  & a {
    display: flex;
    align-items: center;
  }
  & span {
    color: #fff;
    margin: 0;
    font-weight: 600;
    display: inline-block;
    font-size: 2rem;
  }
`;
