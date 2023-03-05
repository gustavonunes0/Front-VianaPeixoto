import * as S from "./styles";
import headerLogo from "../../assets/images/headerLogo.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <S.Logo src={headerLogo} alt="Logo" />
        <S.Menu>
          <S.MenuItem>HOME</S.MenuItem>
          <S.MenuItem>SOBRE NÓS</S.MenuItem>
          <S.MenuItem>NOSSA EQUIPE</S.MenuItem>
          <S.MenuItem>ESPECIALIDADES</S.MenuItem>
          <S.MenuItem>IMPRENSA</S.MenuItem>
          <S.MenuItem>CONTATO</S.MenuItem>
        </S.Menu>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};

export default Header;
