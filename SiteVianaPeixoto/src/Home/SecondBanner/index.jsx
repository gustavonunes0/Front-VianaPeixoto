import { InMemorianContainer, IMContent, IMContentRight, IMContentleft, Titulo, TextoSecundario, Botao } from "./styles";
// import fotoSocios from "../../assets/images/Sociojpeg";
import { Link } from "react-router-dom";


const InMemorian = ({ scrollToTop }) => {
    return (
        <InMemorianContainer>
            <IMContent>
                <IMContentleft>
                    <Titulo>
                        <p>Por quê você deve<br />nos escolher?</p>
                        <TextoSecundario>
                            <p>Nosso escritório possui tradição no mercado, reputação ilibada, expertise nas mais diversas áreas do Direito e o melhor atendimento aos nossos cliente</p>
                            <p>Somos uma empresa que leva em consideração o contato com as pessoas, sobretudo através de uma comunicação clara e capaz de integrar as mais variadas demanda</p>
                            <p>Se você e sua empresa prezam por atenção, respeito e celeridade, entre em contato com um de nossos advogado</p>
                        </TextoSecundario>
                        <Botao>
                            <Link to="/sobre" onClick={scrollToTop} style={{ textDecoration: 'none', color: '#000' }}>
                                Sobre nós
                            </Link>
                        </Botao>
                    </Titulo>
                </IMContentleft>
                <IMContentRight>
                    <ImagemSocios src={"/fotos/Sociojpeg"} />
                </IMContentRight>
            </IMContent>
        </InMemorianContainer>
    );
};

export default InMemorian;
