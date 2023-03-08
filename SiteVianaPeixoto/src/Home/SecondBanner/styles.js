import styled from "styled-components";

export const InMemorianContainer = styled.div`
  display: flex;
  justify-content: "space-evenly";
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    display:grid;
    gris-template-columns: 1fr;
  }
`;

export const IMContent = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  @media screen and (max-width: 600px) {
    display:grid;
    gris-template-columns: 1fr;
  }
`;

export const IMContentleft = styled.div`
  width: 50%;
  background-color: #edeeed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 12rem;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0%;
  }
`;

export const IMContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;


export const ImagemSocios = styled.img`
  width: 100%;
`;

export const Titulo = styled.div`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Titillium Web';
  color: #000;
  line-height: 3rem;
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
    padding: 3rem 2rem;
  }
`;

export const TextoSecundario = styled.div`
  margin-top: 3%;
  margin-bottom: 4%;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Titillium Web';
  color: #000;
  line-height: 1.5rem;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Botao = styled.button`
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  background: transparent;
  width: 30%;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: 'Titillium Web';
  color: #000;
  text-decoration: underline;
  border: none;
  text-align: left;
`;
