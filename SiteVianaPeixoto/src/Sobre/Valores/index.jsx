import * as S from "./styles";

import mainBanner from "../../assets/images/mainBanner.svg";
import Mapa from "../../assets/images/Mapa.svg";
import OndeEstamos from "../../assets/images/OndeEstamos.svg";
import LegendaMapa from "../../assets/images/legendaMapa.svg";

const MainBanner = () => {
  return (
    <S.ValoresContainer>
      <S.Titulo>NOSSOS VALORES</S.Titulo>
      <S.Descricao>Somos comprometicos com a <strong>ética</strong> e a <strong>verdade</strong>. <strong>Integridade</strong>,<strong> , transparência</strong> e <strong>responsabilidade</strong> são os pilares para entregarmos um serviço de <strong>qualidade</strong>. Somos <strong>leais</strong> e promovemos um time diverso, <strong>humanizado</strong> e produtivo, atendendo assim os nossos clientes com foco na geração de resultados.</S.Descricao>
      <S.GridValores>
        <S.BoxValor>
            <S.Valor>ÉTICA</S.Valor>
            <S.Texto>Integridade e transparência em atuar de forma ética e responsável, primando sempre a verdade com o cliente.</S.Texto>
        </S.BoxValor>
        <S.BoxValor>
            <S.Valor>QUALIDADE E EXCELÊNCIA</S.Valor>
            <S.Texto>Qualidade padrão, clareza e objetividade em oferecer o melhor atendimento.</S.Texto>
        </S.BoxValor>
        <S.BoxValor>
            <S.Valor>COMPROMETIMENTO COM O TRABALHO</S.Valor>
            <S.Texto>Dedicação total do exercício do Direito em benefício dos clientes.</S.Texto>
        </S.BoxValor>
        <S.BoxValor>
            <S.Valor>ESPIRITO DE EQUIPE</S.Valor>
            <S.Texto>IUnião, construção e sucesso entre colaboradores, clientes e parceiros.</S.Texto>
        </S.BoxValor>
        <S.BoxValor>
            <S.Valor>ENTUSIASMO</S.Valor>
            <S.Texto>Vocação para a prática da advocacia, exercendo com dedicação, prazer e alegria.</S.Texto>
        </S.BoxValor>
        <S.BoxValor>
            <S.Valor>LEALDADE</S.Valor>
            <S.Texto>Lealdade a si mesmo e com o próximo.</S.Texto>
        </S.BoxValor>
      </S.GridValores>
    </S.ValoresContainer>
  );
};

export default MainBanner;
