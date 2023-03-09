import styled from "styled-components";

export const PartnersContainer = styled.div`
  width: 23rem;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 15%;
  }
`;

export const PartnersImg = styled.img`
  width: 100%;
`;

export const PartnersInfo = styled.div`
  width: 100%;
  margin-top: -2%;
  height: 6rem;
  color: #b9c6d7;
  background-color: #4d008c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const PartnersInfoName = styled.span`
  font-size: 1.9rem;
  font-weight: 400;
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

export const PartnersInfoPosition = styled.span`
  font-size: 1.6rem;
  font-weight: 200;
`;
