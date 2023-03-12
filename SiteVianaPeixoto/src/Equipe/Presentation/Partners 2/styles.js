import styled from "styled-components";

export const PartnersContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 30% 1fr;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 15%;
  }
`;

export const PartnersImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const containerIMG = styled.div`
  height: 19rem;
  align-self: center; 
`;


export const PartnersInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5%;
  gap: 0.5rem;
`;

export const PartnersInfoName = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  color: #50358f;
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

export const PartnersInfoPosition = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
export const PartnersInfoEmail = styled.span`
  font-size: 1rem;
  font-weight: 800;
`;