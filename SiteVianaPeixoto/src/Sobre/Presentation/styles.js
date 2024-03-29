import styled from "styled-components";

export const PresentationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  padding: 0% 5%;
  justify-content: center;
  background-color: #b8c5d7;
  padding-bottom: 7rem;
  place-items: center;
`;

export const PresentationBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PresentationTitle = styled.h2`
  color: #4d008c;
  font-size: 6rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
`;

export const PresentationParag = styled.p`
  font-size: 1.5rem;
`;

export const PresentationPartnersBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  @media screen and (max-width: 800px) {
    display:grid;
    gris-template-columns: 1fr;
    justify-content: center;
  }
`;
