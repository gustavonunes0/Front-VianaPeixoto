// import * as S from "./styles";
// import footerLogo from "../../assets/images/footerLogo.svg";
// import instagramIcon from "../../assets/images/instagramIcon.svg";
// import facebookIcon from "../../assets/images/facebookIcon.svg";
// import linkedinIcon from "../../assets/images/linkedinIcon.svg";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterBox>
        <S.FooterCompanyInfoIcon src={"/fotos/footerLogo.svg"} alt="logo" />

        <S.FooterSubmenu>
          <S.FooterSubmenuTitle>SERVIÇOS</S.FooterSubmenuTitle>

          <S.FooterSubmenuItem>Direito Securitário</S.FooterSubmenuItem>
          <S.FooterSubmenuItem>Saúde Suplementar</S.FooterSubmenuItem>
          <S.FooterSubmenuItem>Direito Bancário</S.FooterSubmenuItem>
        </S.FooterSubmenu>

        <S.FooterSubmenu>
          <S.FooterSubmenuTitle>CORPORATIVO</S.FooterSubmenuTitle>

          <S.FooterSubmenuItem>Sobre nós</S.FooterSubmenuItem>
          <S.FooterSubmenuItem>Nossa equipe</S.FooterSubmenuItem>
          <S.FooterSubmenuItem>Imprensa</S.FooterSubmenuItem>
          <S.FooterSubmenuItem>Contato</S.FooterSubmenuItem>
        </S.FooterSubmenu>

        <S.FooterSubmenu>
          <S.FooterSubmenuTitle>CONECTE-SE CONOSCO</S.FooterSubmenuTitle>

          <S.FooterSubmenuItem>
            <a href="https://www.instagram.com/vianapeixotoadvogados/" target="_blank">
              <S.FooterSubmenuSocialMedia src={"/fotos/instagramicon.svg"} />
            </a>
            <a href="https://www.facebook.com/VianaPeixotoAdv" target="_blank">
              <S.FooterSubmenuSocialMedia src={"/fotos/facebookicon.svg"} />
            </a>
            <a href="https://www.linkedin.com/company/viana-peixoto-advogados-associados/mycompany/" target="_blank">
              <S.FooterSubmenuSocialMedia src={"/fotos/linkedinicon.svg"} />
            </a>
          </S.FooterSubmenuItem>
        </S.FooterSubmenu>
      </S.FooterBox>
    </S.Footer>
  );
};

export default Footer;
