import * as S from "./styles";
// import fotoSocios from "../../assets/images/Socios.jpeg";
import { Link } from "react-router-dom";


const InMemorian = ({ scrollToTop }) => {
    return (
        <S.InMemorianContainer>
            <S.IMContent>
                <S.IMContentleft>
                    <S.Titulo>
                        <p>Por quê você deve<br />nos escolher?</p>
                        <S.TextoSecundario>
                            <p>Nosso escritório possui tradição no mercado, reputação ilibada, expertise nas mais diversas áreas do Direito e o melhor atendimento aos nossos clientes.</p>
                            <p>Somos uma empresa que leva em consideração o contato com as pessoas, sobretudo através de uma comunicação clara e capaz de integrar as mais variadas demandas.</p>
                            <p>Se você e sua empresa prezam por atenção, respeito e celeridade, entre em contato com um de nossos advogados.</p>
                        </S.TextoSecundario>
                        <S.Botao>
                            <Link to="/sobre" onClick={scrollToTop} style={{ textDecoration: 'none', color: '#000' }}>
                                Sobre nós
                            </Link>
                        </S.Botao>
                    </S.Titulo>
                </S.IMContentleft>
                <S.IMContentRight>
                    <S.ImagemSocios src={"/fotos/Socios.jpeg"} />
                </S.IMContentRight>
            </S.IMContent>
        </S.InMemorianContainer>
    );
};

export default InMemorian;
