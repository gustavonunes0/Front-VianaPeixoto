import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 80%;
  height: 15rem;
  background-color: #fff;
  align-self: center;
  font-family: TitilliumWeb-Regular, "Titillium Web";
  margin-bottom: 2%;
  @media screen and (max-width: 800px) {
    width: 60%;
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    width: 75%;
    height: 100%;
    margin-bottom: 7%;
  }
`;
export const CardsInfo = styled.div`
  width: 100%;
  text-align: justify;
  display: grid;
  grid-template-columns: ${(props) => (props.hasFoto ? "30% 70%" : "100%")};
  padding-top: ${(props) => (props.hasFoto ? "0%" : "3%")};
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;
export const CardBox = styled.div`
  width: 100%;
  place-self: center;
  padding-right: 7%;
  padding-left: 4%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    padding: 5%;
  }
`;
export const CardTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;
export const ImgContainer = styled.div`
  height: 15rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const CardText = styled.div`
  width: 100%;
  font-size: 0.95rem;
  margin-top: 2%;

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
  @media screen and (max-width: 800px) {
  }
`;
