import * as S from "./styles";
import { Link } from "react-router-dom";

const Cards = ({ foto, title, text1, id }) => {
  return (
    <>
      <S.CardsContainer>
        <S.CardsInfo hasFoto={!!foto}>
          <S.ImgContainer style={{ display: foto != "" ? "flex" : "none" }}>
            <S.CardImg src={foto} />
          </S.ImgContainer>
          <S.CardBox>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardText>
              <p>{text1}</p>
            </S.CardText>
            <Link to={`/post/${id}`}>
              <S.Botao>Veja Mais</S.Botao>
            </Link>
          </S.CardBox>
        </S.CardsInfo>
      </S.CardsContainer>
    </>
  );
};

export default Cards;
