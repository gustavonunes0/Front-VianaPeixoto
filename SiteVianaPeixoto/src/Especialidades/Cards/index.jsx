import * as S from "./styles";

const Cards = ({ title, text1, text2, text3}) => {
    return (<>
        <S.CardsContainer>
            <S.CardsInfo>
                <S.CardTitle> <span>{title}</span></S.CardTitle>
                <S.CardText> <p>{text1}</p></S.CardText>
                <S.CardText> <p>{text2}</p></S.CardText>
                <S.CardText> <p>{text3}</p></S.CardText>
            </S.CardsInfo>
        </S.CardsContainer>
    </>);
};

export default Cards;

