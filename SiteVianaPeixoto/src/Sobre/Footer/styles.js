import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;

  display: grid;
  grid-template-columns: 87.5rem;
  justify-content: center;

  background-color: #8d9ebc;
`;

export const FooterBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;

  padding: 6rem 0rem;
`;

export const FooterCompanyInfoIcon = styled.img`
  width: 40%;
`;

export const FooterSubmenu = styled.span`
  width: 30%;
  padding-left: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.2rem;

  color: white;
`;

export const FooterSubmenuTitle = styled.span`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

export const FooterSubmenuItem = styled.span`
  font-size: 1.3rem;
  color: #b9c6d7;

  display: flex;
  gap: 1.8rem;

  &:hover {
    font-weight: bold;
    filter: brightness(2);
  }
`;

export const FooterSubmenuSocialMedia = styled.img`
  width: 1.8rem;
  padding-top: 0.5rem;

  &:hover {
    filter: brightness(0.1);
  }
`;
