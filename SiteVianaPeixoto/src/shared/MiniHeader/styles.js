import styled from "styled-components";

export const MiniHeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background-color: #472e8d;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    height: 6rem;
  }
`;

export const MiniHeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: grid;
    place-items: center;
  }
`;
export const BoxSetor1 = styled.div`
  display: flex;
  align-items: center;
`;
export const BoxSetor2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 800px) {
    margin-left: -3.5%;
  }
`;

export const LogoIcons = styled.img`
  width: 1.1rem;
  margin-right: -1.5rem;
`;
export const LogoSocials = styled.img`
  width: 1.20rem;
  margin: 0.7rem;
`;

export const MiniMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 800px) {
  }
`;

export const MiniMenuItem = styled.div`
  font-size: 1rem;
  padding: 0rem 2rem;
  color: #edeeed;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
  @media only screen and (max-width: 800px) {
    font-size: 0.9rem;
    white-space: nowrap;
    padding-right: 1rem;
  }
`;

export const Botao2 = styled.button`
    width:100%;
    font-size: 1rem;
    height: 2.3rem;
    background-color: #472e8d;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 0.4rem;
    
    &:hover{
        background-color: #fff;
        color: #472e8d;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;
export const linkA = styled.a`
    width: 15rem;
    text-decoration: none;
    color: #adbfd0;
    &:hover{
        color: #472e8d;
    }
`;
