import * as S from "./styles";

import mainBanner from "../../assets/images/mainBanner.svg";

const MainBanner = () => {
  return (
    <S.SobreBannerContainer>
      <S.SobreBanner src={mainBanner} alt="Sobre banner" />
    </S.SobreBannerContainer>
  );
};

export default MainBanner;
