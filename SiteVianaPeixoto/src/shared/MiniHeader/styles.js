import styled from "styled-components";

export const MiniHeaderContainer = styled.header`
  width: 100%;
  height: 2rem;
  background-color: #472e8d;
  display: flex;
  justify-content: center;
`;

export const MiniHeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
  align-items: center;
`;
export const BoxSetor1 = styled.div`
  display: flex;
  align-items: center;
`;
export const BoxSetor2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoIcons = styled.img`
  width: 0.85rem;
  margin-right: -1.5rem;
`;
export const LogoSocials = styled.img`
  width: 1.15rem;
  margin: 0.7rem;
`;

export const MiniMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const MiniMenuItem = styled.div`
  font-size: 0.75rem;
  padding: 0rem 2rem;
  color: #edeeed;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;
