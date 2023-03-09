import styled from "styled-components";

export const SandwichMenuBox = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SMLine = styled.div`
  height: 0.3rem;
  width: 2rem;
  background-color: gray;
  margin: 0.1rem;
`;
