import * as S from "./styles";

const Partners = ({image, name, text, email}) => {
    return (<>
        <S.PartnersContainer>
          <S.containerIMG>
            <S.PartnersImg src={image} alt="partner"/>
          </S.containerIMG>
            <S.PartnersInfo>
                <S.PartnersInfoName> <p>{name}</p></S.PartnersInfoName>
                {/* <S.PartnersInfoPosition> <p>{text}</p></S.PartnersInfoPosition> */}
                <S.PartnersInfoEmail> <p>{email}</p></S.PartnersInfoEmail>
            </S.PartnersInfo>
        </S.PartnersContainer>
    </>);
};

export default Partners;

