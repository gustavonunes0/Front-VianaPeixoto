import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #fff;
  align-self: center;
  font-family: TitilliumWeb-Regular, "Titillium Web";
  margin-top: -2.3%;
  padding-top: 2%;
  padding-bottom: 4%;
  align-self: start;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15rem;
    margin-bottom: 3%;
    margin-top: 3%;
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
  font-size: 1.5rem;
  font-weight: 800;
  padding-left: 4%;
  padding-right: 4%;
`;
export const CardDate = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
`;

export const CardText = styled.div`
  width: 100%;
  font-size: 0.9rem;
  margin-top: 2%;
  padding-left: 4%;
  padding-right: 4%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  line-clamp: 6;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 800px) {
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
  margin-left: 4%;
  @media screen and (max-width: 800px) {
    width: 8.5rem;
  }
`;
