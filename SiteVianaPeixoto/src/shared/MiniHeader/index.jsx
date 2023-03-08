import * as S from "./styles";
import instagram from "../../assets/images/instagramicon.svg";
import facebook from "../../assets/images/facebookicon.svg";
import linkedin from "../../assets/images/linkedinicon.svg";
import telefone from "../../assets/images/telefone.svg";
import email from "../../assets/images/email.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.MiniHeaderContainer>
      <S.MiniHeaderBox>
        <S.BoxSetor1>
          <S.MiniMenu>
            <S.LogoIcons src={telefone} alt="Logo" />
            <S.MiniMenuItem><Link to="/" style={{ textDecoration: 'none', color: '#edeeed' }}>(85) 3033-6161</Link></S.MiniMenuItem>
          </S.MiniMenu>
          <S.MiniMenu>
            <S.LogoIcons src={email} alt="Logo" />
            <S.MiniMenuItem><Link to="/sobre" style={{ textDecoration: 'none', color: '#edeeed' }}>contato@vianapeicoto.com.br</Link></S.MiniMenuItem>
          </S.MiniMenu>
        </S.BoxSetor1>
        <S.BoxSetor2>
          <S.LogoSocials src={instagram} alt="Logo" />
          <S.LogoSocials src={facebook} alt="Logo" />
          <S.LogoSocials src={linkedin} alt="Logo" />
        </S.BoxSetor2>
      </S.MiniHeaderBox>
    </S.MiniHeaderContainer>
  );
};

export default Header;