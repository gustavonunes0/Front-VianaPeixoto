import * as S from "./styles";

const Cards = ({ foto, title, text1, text2, text3}) => {
    return (<>
        <S.CardsContainer>
            <S.CardsInfo>
                <S.CardImg src={foto}/>
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardText> <p>{text1}</p></S.CardText>
                <S.Botao>Veja Mais</S.Botao>
            </S.CardsInfo>
        </S.CardsContainer>
    </>);
};

export default Cards;

