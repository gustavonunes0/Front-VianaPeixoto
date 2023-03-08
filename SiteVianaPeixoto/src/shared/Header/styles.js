import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.5rem;
  background-color: #edeeed;
  display: grid;
  grid-template-columns: 87.5rem;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 9rem;
  margin-left: 12.5%;
`;

export const Menu = styled.nav`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: 1rem;
  padding: 0rem 2rem;
  color: #8d9ebc;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;
