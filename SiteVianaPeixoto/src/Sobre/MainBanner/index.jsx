import { SobreBannerContainer, SobreBanner, OndeEstamos, Mapa, LegendaMapa } from "./styles";


const MainBanner = () => {
  return (
    <SobreBannerContainer>
      <p><SobreBanner src={"/fotos/mainBanner.svg"} alt="Sobre banner" /></p>
      <OndeEstamos src={"/fotos/OndeEstamosvg"}/>
      <Mapa src={"/fotos/Mapa.svg"}/>
      <LegendaMapa src={"/fotos/legendaMapa.svg"}/>
    </SobreBannerContainer>
  );
};

export default MainBanner;
