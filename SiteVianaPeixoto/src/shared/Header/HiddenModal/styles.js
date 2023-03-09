import styled from "styled-components";

export const HeaderModal = styled.div`
  display: none;

  @media only screen and (max-width: 800px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 99;
    top: 0;
  }
`;

export const HeaderModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
  padding-top: 4rem;
`;

export const HeaderModalMenuItems = styled.div`
  font-size: 1.5rem;
  padding: 0rem 2rem;
  color: #8d9ebc;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export const HeaderModalVoltar = styled.div`
  font-size: 1.5rem;
  color: white;
  padding: 0.3rem 1rem;
  background-color: #4d008c;
  border-radius: 5rem;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
