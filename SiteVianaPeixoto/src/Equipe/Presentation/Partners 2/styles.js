import styled from "styled-components";

export const PartnersContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: TitilliumWeb-Regular, 'Titillium Web';
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 15%;
  }
`;

export const PartnersImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    
  }
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
  align-items: center;
  padding: 5%;
  gap: 0.5rem;
  
`;

export const PartnersInfoName = styled.span`
  font-size: 1.7rem;
  font-weight: 800;
  color: #758592;
  font-family: Titillium Web-Regular, 'Titillium Web';
  @media screen and (max-width: 800px) {
    font-size: 2.3rem;
  }
`;

export const PartnersInfoPosition = styled.span`
  font-size: 1rem;
  font-weight: 500;
  @media screen and (max-width: 1000px) {
    font-size: 1.7rem;
  }
`;
export const PartnersInfoEmail = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: #758592;
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;
