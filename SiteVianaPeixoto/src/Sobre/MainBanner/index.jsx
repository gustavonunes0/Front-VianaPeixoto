import * as S from "./styles";

import mainBanner from "../../assets/images/mainBanner.svg";
import Mapa from "../../assets/images/Mapa.svg";
import OndeEstamos from "../../assets/images/OndeEstamos.svg";
import LegendaMapa from "../../assets/images/legendaMapa.svg";

const MainBanner = () => {
  return (
    <S.SobreBannerContainer>
      <p><S.SobreBanner src={"/fotos/mainBanner.svg"} alt="Sobre banner" /></p>
      <S.OndeEstamos src={"/fotos/OndeEstamos.svg"}/>
      <S.Mapa src={"/fotos/Mapa.svg"}/>
      <S.LegendaMapa src={"/fotos/legendaMapa.svg"}/>
    </S.SobreBannerContainer>
  );
};

export default MainBanner;
