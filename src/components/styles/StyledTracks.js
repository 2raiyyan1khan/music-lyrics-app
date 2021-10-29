import styled from "styled-components";

export const StyledTracksContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  & h3 {
    margin-top: 3rem;
    color: #111827;
  }
`;
export const StyledTracks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 10px 0;
`;
