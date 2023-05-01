import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 3rem;
  align-items: center;
  bottom: 0;
  background-color: #472E8D;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 0.8%;
  display: flex;
  padding: 1%;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: .3rem;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    height: 15%;
    flex-direction: column;
    font-size: 1.15rem;
    padding: 2.5%;
  }
`;

export const Botao = styled.button`
  width: 15%;
  border: none;
  height: 2rem;
  background-color: honeydew;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  border-radius: .3rem;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;
