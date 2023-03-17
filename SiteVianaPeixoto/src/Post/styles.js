import styled from "styled-components";

export const Container = styled.div`

  background-color: #adbfd0;
  text-align: -webkit-center;
  align-self: center;
  font-family: TitilliumWeb-Regular, 'Titillium Web';
  padding: 4%;
  display: grid;
  grid-template-columns: 55% 25%;
  gap: 2%;
  place-content: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    grid-template-columns: 100%;
  }
`;