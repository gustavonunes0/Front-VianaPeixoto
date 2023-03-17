import * as S from "./styles";
import { Link } from "react-router-dom";

const Cards = ({ id, foto, title, date, text1 }) => {
  return (
    <>
      <S.CardsContainer>
        <S.CardsInfo>
          <S.CardDate>ÚLTIMA PUBLICAÇÃO</S.CardDate>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardText>
            <p>{text1}</p>
          </S.CardText>
          <a
            onClick={() => {
              window.location.href = `/post/${id}`;
            }}
          >
            <S.Botao>Veja Mais</S.Botao>
          </a>
        </S.CardsInfo>
      </S.CardsContainer>
    </>
  );
};

export default Cards;
