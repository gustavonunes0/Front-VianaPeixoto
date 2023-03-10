import * as S from "./styles";

const Partners = ({ image, name, position }) => {
  return (
    <>
      <S.PartnersContainer>
        <S.PartnersImg src={image} alt="partner" />
        <S.PartnersInfo>
          <S.PartnersInfoName>{name}</S.PartnersInfoName>
          <S.PartnersInfoPosition>{position}</S.PartnersInfoPosition>
        </S.PartnersInfo>
      </S.PartnersContainer>
    </>
  );
};

export default Partners;
