import styled from "styled-components";

export const PremioContainer = styled.div`
    width: 80%;
    height: 30rem;
    margin-bottom: 5%;
  @media screen and (max-width: 800px) {
    width: 80%;
    height: 15rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 15rem;
  }
`;
export const Premio = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  @media screen and (max-width: 800px) {

  }
`;