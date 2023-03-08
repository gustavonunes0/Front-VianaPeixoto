import * as S from "./styles";
import fotoSocios from "../../assets/images/Socios.jpeg";
import { Link } from "react-router-dom";


const InMemorian = ({ scrollToTop }) => {
    return (
        <S.InMemorianContainer>
            <S.IMContent>
                <S.IMContentleft>
                    <S.Titulo>
                        Por quê você deve<br />nos escolher?
                        <S.TextoSecundario>
                            Aqui vai texto persuasivo. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Aliquam pharetra
                            laoreet orci quis scelerisque. Pellentesque ac leo
                            eget neque hendrerit consectetur. Ut non felis lectus.
                            Aenean ac quam lorem. Etiam pulvinar mauris leo,
                            cursus pretium nunc tempus eu.
                        </S.TextoSecundario>
                        <S.Botao>
                            <Link to="/sobre"  onClick={scrollToTop} style={{ textDecoration: 'none', color: '#000' }}>
                            Sobre nós
                            </Link>
                        </S.Botao>
                    </S.Titulo>
                </S.IMContentleft>
                <S.IMContentRight>
                    <S.ImagemSocios src={fotoSocios} />
                </S.IMContentRight>
            </S.IMContent>
        </S.InMemorianContainer>
    );
};

export default InMemorian;
