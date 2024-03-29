import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  align-self: center;
  font-family: TitilliumWeb-Regular, 'Titillium Web';
  margin-bottom: 2%;
  padding-top: 2%;
  padding-bottom: 4%;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;
export const CardsInfo = styled.div`
  width: 100%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;  
  }
`;
export const CardTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  padding-left: 4%;
  padding-right: 4%;
`;
export const CardDate = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 3%;
  padding-top: 1%;
`;
export const ImgContainer = styled.div`
  height: 20rem;
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;  
  }
`;
export const CardImg = styled.img`
  width: 100%;  
  object-fit: cover;
  @media screen and (max-width: 800px) {
  }
`;
export const CardText = styled.pre`
  width: 100%;
  white-space: pre-wrap;
  font-size: 1.15rem;
  margin-top: 2%;
  padding-left: 4%;
  padding-right: 4%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Botao = styled.button`
  width: 10rem;
  height: 2rem;
  font-size: 1.2rem;
  background-color: #472e8d;
  color: #fff;
  border: none;
  margin-top: 2%;
  @media screen and (max-width: 800px) {

  }
`;
