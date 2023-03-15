import * as S from "./styles";
// import fotoSocios from "../../assets/images/Socios.jpeg";
import { Link } from "react-router-dom";


const InMemorian = ({ scrollToTop }) => {
    return (
        <S.InMemorianContainer>
            <S.IMContent>
                <S.IMContentleft>
                    <S.Titulo>
                        <p>Por que escolher <br></br> o VP?</p>
                        <S.TextoSecundario>
                            <p>Porque é um escritório sedimentado em todos os estados do Brasil, com uma atuação em demandas de baixa, média e alta complexidade.</p>
                            <p>Nossa expertise é fruto de uma equipe estruturada, com alto desempenho em soluções estratégicas, células próprias para o Direito Bancário, Securitário e Saúde Suplementar.</p>
                            <p>Temos muito orgulho dos vínculos estabelecidos com cada um de nossos clientes.</p>
                            <p>Quer saber mais? Já veja as opções de contato conosco.</p>
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
