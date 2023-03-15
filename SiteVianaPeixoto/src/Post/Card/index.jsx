import * as S from "./styles";
import {Link} from "react-router-dom";


const Cards = ({foto, title,date, text1, text2, text3}) => {
    return (
        <>
            <S.CardsContainer>
                <S.CardsInfo>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardDate>{date}</S.CardDate>
                        <S.ImgContainer style={{ display: foto != "" ? 'flex' : 'none' }}>
                            <S.CardImg src={foto}/>
                        </S.ImgContainer>
                        <S.CardText>
                            <p>{text1}</p>
                        </S.CardText>
                </S.CardsInfo>
            </S.CardsContainer>
        </>
    );
};

export default Cards;

