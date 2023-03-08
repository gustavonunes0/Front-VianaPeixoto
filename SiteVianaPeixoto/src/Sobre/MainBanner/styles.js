import styled from "styled-components";

export const SobreBannerContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 87.5rem;
  justify-content: center;
  margin: 8rem 0rem;
<<<<<<< Updated upstream
`;

export const SobreBanner = styled.img`
  width: 100%;
=======
  @media screen and (max-width: 600px) {
    gris-template-columns: 100%;
    margin: 4rem 0rem;
  }
`;

export const SobreBanner = styled.img`
  width: 90%;
  margin-left: 5%;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Mapa = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 25%;
    justify-self: center;
  }
`;
export const OndeEstamos = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 25%;
    justify-self: center;
  }
`;

export const LegendaMapa = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 25%;
    justify-self: center;
  }
>>>>>>> Stashed changes
`;
