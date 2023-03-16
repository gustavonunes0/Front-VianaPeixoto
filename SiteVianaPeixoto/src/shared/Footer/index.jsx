import * as S from "./styles";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <S.Footer>
            <S.FooterBox>
                <S.BoxFoto>
                    <p><S.FooterCompanyInfoIcon src={"/fotos/Ativo 3.png"}
                            alt="logo"/></p>
                </S.BoxFoto>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>SERVIÇOS</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>Direito Securitário</S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>Saúde Suplementar</S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>Direito Bancário</S.FooterSubmenuItem>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>CORPORATIVO</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem><Link to="/sobre"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#b9c6d7"
                                }
                        }>
                            Sobre
                        </Link></S.FooterSubmenuItem>
                    <S.FooterSubmenuItem><Link to="/equipe"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#b9c6d7"
                                }
                        }>
                            Equipe
                        </Link></S.FooterSubmenuItem>
                    <S.FooterSubmenuItem><Link to="/imprensa"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#b9c6d7"
                                }
                        }>
                            Imprensa
                        </Link></S.FooterSubmenuItem>
                    <S.FooterSubmenuItem><Link to="/contato"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#b9c6d7"
                                }
                        }>
                            Contato
                        </Link></S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link to="/dashboard"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#b9c6d7"
                                }
                        }>
                            Dashboard
                        </Link>
                    </S.FooterSubmenuItem>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>CONECTE-SE CONOSCO</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <a href="https://www.instagram.com/vianapeixotoadvogados/" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/fotos/instagramIcon.svg"}/>
                        </a>
                        <a href="https://www.facebook.com/VianaPeixotoAdv" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/fotos/facebookIcon.svg"}/>
                        </a>
                        <a href="https://www.linkedin.com/company/viana-peixoto-advogados-associados/mycompany/" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/fotos/linkedinIcon.svg"}/>
                        </a>
                    </S.FooterSubmenuItem>
                </S.FooterSubmenu>
            </S.FooterBox>
        </S.Footer>
    );
};

export default Footer;

