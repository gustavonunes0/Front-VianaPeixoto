import styled from "styled-components";

export const ValoresContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8a9dbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 5rem 0rem;
  @media screen and (max-width: 800px) {
    gris-template-columns: 100%;
  }
`;
export const GridValores = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
  margin: 5rem 0rem;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 4rem 0rem;
  }
`;

export const Titulo = styled.span`
    font-size: 3rem;
    color: #fff;
    font-weight: 500;
    `;
export const Descricao = styled.p`
    font-size: 1.1rem;
    color: #fff;
    width: 70%;
    margin-top: 1.5%;
`;
export const Valor = styled.span`
    font-size: 1.1rem;
    color: #fff;
    font-weight: 800;
    `;
export const Texto = styled.p`
    font-size: 1rem;
    color: #fff;
    width: 100%;
    margin-top: 2%;
`;
export const BoxValor = styled.div`
    font-size: 1.1rem;
    color: #fff;
    width: 100%;
    background-color: #6c808c;
    border: 2px solid #8a9dbd;
    text-align: start;
    padding: 6%;

    &:hover{
        background-color: #472e8d;
    }
`;