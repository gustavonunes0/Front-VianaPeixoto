import { Container, Content, ContentFirst, IconTitle, IconTopics, IconTopics2, TopicText } from "./styles";
// import icon1 from "../../assets/images/IconTopics1.svg";
// import icon2 from "../../assets/images/IconTopics2.svg";
// import icon3 from "../../assets/images/IconTopics3.svg";
import { Link } from "react-router-dom";


const Topics = ({ scrollToTop }) => {
    return (
        <Container>
            <ContentFirst>
                <Link to="/sobre"  onClick={scrollToTop} style={{ textDecoration: 'none', color: '#8d9ebc' }}>
                    <IconTopics src={"/fotos/IconTopics2.svg"} />
                    <IconTitle><p>QUEM SOMOS</p></IconTitle>
                    <TopicText><p>Somos um escritório de advocacia que identifica as necessidades dos clientes e desenvolve soluções jurídicas personalizada
                        Trabalhamos com a máxima qualidade, pautados na ética, disponibilidade integral, eficiência e agilidade.</p></TopicText>
                </Link>
            </ContentFirst>
            <Content>
                <IconTopics src={"/fotos/IconTopics1.svg"} />
                <IconTitle><p>ESPECIALIDADES</p></IconTitle>
                <TopicText><p>No rol de especialidades jurídicas, atuamos em diversas áreas do Direito. São elas: Direito Administrativo; Direito Civil; Direito Comercial; Direito do Trabalho e Processual Trabalhista; Direito Imobiliário; Direito Penal; Direito Previdenciário; Direito Tributário, Ambiental, Internacional.
                    Temos também expertise em recuperação de crédito, seja no âmbito judicial ou extrajudicial.</p></TopicText>
            </Content>
            <Content>
                <IconTopics2 src={"/fotos/IconTopics3.svg"} />
                <IconTitle><p>EQUIPE</p></IconTitle>
                <TopicText><p>Contamos com uma equipe formada por profissionais multidisciplinares prontos para melhor defender nossos cliente</p></TopicText>
            </Content>
        </Container>
    );
};

export default Topics;
