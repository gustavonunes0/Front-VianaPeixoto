import * as S from "./styles";
// import headerLogo from "../../assets/images/headerLogo.svg";
import { Link } from "react-router-dom";
import SandwichMenu from "./SandwichMenu";
import HiddenModal from "./HiddenModal";
import { useState } from "react";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <S.Logo src={"/fotos/headerLogo.svg"} alt="Logo" />

          <S.Menu>
            <S.MenuItem>
              <Link to="/" style={{ textDecoration: "none", color: "#8d9ebc" }}>
                HOME
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                to="/sobre"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                SOBRE NÓS
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                NOSSA EQUIPE
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                to="/especialidades"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                ESPECIALIDADES
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                to="/imprensa"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                IMPRENSA
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link
                to="/contato"
                style={{ textDecoration: "none", color: "#8d9ebc" }}
              >
                CONTATO
              </Link>
            </S.MenuItem>
          </S.Menu>

          <SandwichMenu onClick={setOpenModal} />
        </S.HeaderBox>
      </S.HeaderContainer>
      <HiddenModal open={openModal} back={setOpenModal} />
    </>
  );
};

export default Header;
