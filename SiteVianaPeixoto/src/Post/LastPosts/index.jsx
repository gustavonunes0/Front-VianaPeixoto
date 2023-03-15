import * as S from "./styles";
import {Link} from "react-router-dom";


const Cards = ({
    foto,
    title,
    date,
    text1,
    text2,
    text3
}) => {
    return (
        <>
            <S.CardsContainer>
                <S.CardsInfo>
                    <S.CardDate>PUBLICAÇÃO ANTERIOR</S.CardDate>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardText>
                        <p>{text1}</p>
                    </S.CardText>
                    <Link to='/post'>
                        <S.Botao>Veja Mais</S.Botao>
                    </Link>
                </S.CardsInfo>
            </S.CardsContainer>
        </>
    );
};

export default Cards;

