import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;

  display: grid;
  grid-template-columns: 100%;
  justify-content: center;

  background-color: #8d9ebc;

`;

export const FooterBox = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;

  padding: 6rem 0rem;
  @media screen and (max-width: 600px) {
    display:grid;
    gris-template-columns: 1fr;
    padding: 10%;
  }
`;

export const BoxFoto = styled.div`
  width: 30%;
  margin-right: 10%;
  @media screen and (max-width: 600px) {
    margin: 0;
    width: 110%;
    padding: 5%;
  }
`;
export const FooterCompanyInfoIcon = styled.img`
  width: 100%;
  margin-right: 10%;
  @media screen and (max-width: 600px) {
    margin: 0;
    width: 110%;
    padding: 5%;
  }
`;

export const FooterSubmenu = styled.span`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.2rem;
  margin-bottom: 2%;

  color: white;
  @media screen and (max-width: 600px) {
    padding: 5%;
  }
`;

export const FooterSubmenuTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  white-space: nowrap;
`;

export const FooterSubmenuItem = styled.span`
  font-size: 1.2rem;
  color: #b9c6d7;
  display: flex;
  gap: 1.8rem;

  &:hover {
    font-weight: bold;
    filter: brightness(2);
  }
`;

export const FooterSubmenuSocialMedia = styled.img`
  width: 2.5rem;
  padding-top: 0.5rem;

  &:hover {
    filter: brightness(0.1);
  }
`;
