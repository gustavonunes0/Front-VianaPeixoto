import { PartnersContainer, PartnersImg, PartnersInfo, PartnersInfoName, PartnersInfoPosition } from './styles.js';

const Partners = ({ image, name, position }) => {
  return (
    <>
      <PartnersContainer>
        <PartnersImg src={image} alt="partner" />
        <PartnersInfo>
          <PartnersInfoName>{name}</PartnersInfoName>
          <PartnersInfoPosition>{position}</PartnersInfoPosition>
        </PartnersInfo>
      </PartnersContainer>
    </>
  );
};

export default Partners;
