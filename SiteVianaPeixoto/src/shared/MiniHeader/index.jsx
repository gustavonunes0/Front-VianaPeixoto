import * as S from "./styles";
// import instagram from "../../../public/fotos/instagramicon.svg";
// import facebook from "../../assets/images/facebookicon.svg";
// import linkedin from "../../assets/images/linkedinicon.svg";
// import telefone from "../../assets/images/telefone.svg";
// import email from "../../assets/images/email.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <S.MiniHeaderContainer>
            <S.MiniHeaderBox>
                <S.BoxSetor1>
                    <S.MiniMenu>
                        <S.LogoIcons src={"/fotos/telefone.svg"}
                            alt="Logo"/>
                        <S.MiniMenuItem>
                            <Link to="/"
                                style={
                                    {
                                        textDecoration: 'none',
                                        color: '#edeeed'
                                    }
                            }>(85) 3033-6161</Link>
                        </S.MiniMenuItem>
                    </S.MiniMenu>
                    <S.MiniMenu>
                        <S.LogoIcons src={"/fotos/email.svg"}
                            alt="Logo"/>
                        <S.MiniMenuItem>
                            <Link to="/sobre"
                                style={
                                    {
                                        textDecoration: 'none',
                                        color: '#edeeed'
                                    }
                            }>contato@vianapeixoto.com.br</Link>
                        </S.MiniMenuItem>
                    </S.MiniMenu>
                </S.BoxSetor1>
                <S.BoxSetor2>
                    <S.linkA target={'_blank'}
                        href="https://vianapeixoto.wiserchannel.com.br/webchat/v2/?cid=640f7cb6ff5e97001f8be086&host=https://vianapeixoto.wiserchannel.com.br">
                        <S.Botao2>NEGOCIE SUAS DIVIDAS</S.Botao2>
                    </S.linkA>
                    <Link to="https://www.instagram.com/vianapeixotoadvogados/" target="_blank">
                        <S.LogoSocials src={"/fotos/instagramIcon.svg"}
                            alt="Logo"/>
                    </Link>
                    <Link to="https://www.facebook.com/VianaPeixotoAdv" target="_blank">
                        <S.LogoSocials src={"/fotos/facebookIcon.svg"}
                            alt="Logo"/>
                    </Link>
                    <Link to="https://www.linkedin.com/company/viana-peixoto-advogados-associados/mycompany/" target="_blank">
                        <S.LogoSocials src={"/fotos/linkedinIcon.svg"}
                            alt="Logo"/>
                    </Link>
                </S.BoxSetor2>
            </S.MiniHeaderBox>
        </S.MiniHeaderContainer>
    );
};

export default Header;

