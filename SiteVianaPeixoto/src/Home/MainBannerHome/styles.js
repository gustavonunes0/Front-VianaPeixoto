import styled from "styled-components";

export const SobreBannerContainer = styled.div`
  width: 100%;
  padding: 10% 15%;
  display: flex;
  justify-content: start;
  background-color: #f4f4f4;
`;

export const ConteudoProvisorio = styled.div`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'Titillium Web';
  color: #c2c6d3;
  line-height: 3rem;

  @media screen and (max-width: 800px) {
    font-size: 2.2rem;
  }
`;

export const TextoSecundario = styled.div`
  margin-top: 3%;
  margin-bottom: 4%;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Titillium Web';
  color: #c2c6d3;
  line-height: 1.5rem;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Botao = styled.button`
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  background: transparent;
  border: 0.1rem solid #c2c6d3;
  width: 20%;
  border-radius: 0.7rem;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Titillium Web';
  color: #c2c6d3;

  &: hover{
    background: #c2c6d3;
    color: #F6F6F6;        
  }

  @media screen and (max-width: 800px) {
    width: 50%;
  }
`;
