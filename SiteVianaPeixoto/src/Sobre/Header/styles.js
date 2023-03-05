import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;

  display: grid;
  grid-template-columns: 87.5rem;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 14rem;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const MenuItem = styled.div`
  font-size: 1.4rem;
  padding: 0rem 2rem;
  color: #8d9ebc;

  &:hover {
    font-weight: bold;
  }
`;
