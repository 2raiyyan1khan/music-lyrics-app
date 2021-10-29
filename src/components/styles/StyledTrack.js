import styled from "styled-components";

export const StyledTrack = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: 0.3s;
  & strong {
    margin-right: 0.8rem;
    color: #1f2937;
  }
  & span {
    color: #374151;
  }
  &:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
    transform: scale(110%);
    border-color: #e100ff;
  }
`;
