import * as S from "./styles";
import icon1 from "../../assets/images/IconTopics1.svg";
import icon2 from "../../assets/images/IconTopics2.svg";
import icon3 from "../../assets/images/IconTopics3.svg";
import { Link } from "react-router-dom";


const Topics = ({ scrollToTop }) => {
    return (
        <S.Container>
            <S.Content>
                <Link to="/sobre"  onClick={scrollToTop} style={{ textDecoration: 'none', color: '#8d9ebc' }}>
                    <S.IconTopics src={icon2} />
                    <S.IconTitle>QUEM SOMOS</S.IconTitle>
                    <S.TopicText>Somos um escritório de advocacia que identifica as necessidades dos clientes e desenvolve soluções jurídicas personalizadas.
                        Trabalhamos com a máxima qualidade, pautados na ética, disponibilidade integral, eficiência e agilidade.</S.TopicText>
                </Link>
            </S.Content>
            <S.Content>
                <S.IconTopics src={icon1} />
                <S.IconTitle>ESPECIALIDADES</S.IconTitle>
                <S.TopicText>No rol de especialidades jurídicas, atuamos em diversas áreas do Direito. São elas: Direito Administrativo; Direito Civil; Direito Comercial; Direito do Trabalho e Processual Trabalhista; Direito Imobiliário; Direito Penal; Direito Previdenciário; Direito Tributário, Ambiental, Internacional.
                    Temos também expertise em recuperação de crédito, seja no âmbito judicial ou extrajudicial.</S.TopicText>
            </S.Content>
            <S.Content>
                <S.IconTopics src={icon3} />
                <S.IconTitle>EQUIPE</S.IconTitle>
                <S.TopicText>Contamos com uma equipe formada por profissionais multidisciplinares prontos para melhor defender nossos clientes.</S.TopicText>
            </S.Content>
        </S.Container>
    );
};

export default Topics;
