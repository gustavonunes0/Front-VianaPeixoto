import * as S from "./styles";

import mainBanner from "../../assets/images/mainBanner.svg";
import Mapa from "../../assets/images/Mapa.svg";
import OndeEstamos from "../../assets/images/OndeEstamos.svg";
import LegendaMapa from "../../assets/images/legendaMapa.svg";

const MainBanner = () => {
  return (
    <S.SobreBannerContainer>
      <p><S.SobreBanner src={mainBanner} alt="Sobre banner" /></p>
      <S.OndeEstamos src={OndeEstamos}/>
      <S.Mapa src={Mapa}/>
      <S.LegendaMapa src={LegendaMapa}/>
    </S.SobreBannerContainer>
  );
};

export default MainBanner;
