import styled from "styled-components";

export const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  /* overflow: hidden; */

  & form {
    width: 100%;

    & div {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 50px;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
      transition: 0.3s;
      &:hover {
        transform: scale(110%);
        box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
      }
      @media only screen and (max-width: 600px) {
        max-width: 100%;
      }
    }
  }

  & button {
    border: none;
    background: transparent;
    font-size: 1rem;
    width: 10%;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    padding: 10px 15px;
    color: rgba(0, 0, 0, 0.8);
    @media only screen and (max-width: 600px) {
      width: 20%;
    }
  }
`;
export const Input = styled.input`
  display: inline-block;
  width: 90%;
  font-weight: 500;
  border: none;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  background: transparent;
  padding: 10px 15px;
  outline: none;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const SearchOptions = styled.span`
  display: inline-block;
  margin-top: 1rem;
  & span {
    padding: 8px 10px;
    border-radius: 50px;
    color: #1f2937;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);

    & input {
      margin-right: 0.4em;
      cursor: pointer;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }
  }
  & span:first-child {
    margin-right: 1rem;
    background-color: #fcd34d;
  }
  & span:nth-child(2) {
    background-color: #f87171;
  }
`;
