import * as S from "./styles";
import { Link } from "react-router-dom";

const Cards = ({ foto, title, date, text1, author }) => {
  return (
    <>
      <S.CardsContainer>
        <S.CardsInfo>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDate>{date}</S.CardDate>
          <S.ImgContainer style={{ display: foto != "" ? "flex" : "none" }}>
            <S.CardImg src={foto} />
          </S.ImgContainer>
          <S.CardText>
            <p>{text1}</p>
          </S.CardText>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              paddingLeft: "4%",
              paddingTop: "2rem",
            }}
          >
            {author}
          </div>
        </S.CardsInfo>
      </S.CardsContainer>
    </>
  );
};

// font-size: 0.9rem;
// font-weight: 300;
// padding-left: 4%;
// padding-right: 4%;
// padding-bottom: 3%;
// padding-top: 1%;

export default Cards;
