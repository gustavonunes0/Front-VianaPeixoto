import Partners from "./Partners";
import * as S from "./styles";
// import DavidSombra from "../../assets/images/DavidSombra.png";
// import JoaoPaulo from "../../assets/images/JoaoPaulo.png";
// import JoseLuiz from "../../assets/images/JoseLuis.png";

const Presentation = () => {
  return (
    <S.PresentationContainer>
      <S.PresentationBox>
        <S.PresentationTitle>Viana Peixoto</S.PresentationTitle>

        <S.PresentationParag>
          O VIANA PEIXOTO ADVOGADOS ASSOCIADOS é uma sociedade de advogados que
          já está no mercado há mais de 26 anos. Atua nas regiões Norte e
          Nordeste do Brasil, destacando-se por agregar tradição, solidez e
          confiabilidade, com o perfil arrojado exigido pela advocacia moderna.
          Conta com uma equipe de profissionais competentes, liderada pelos
          advogados David Sombra Peixoto, João Paulo Sombra Peixoto e José Luís
          Melo Garcia.
        </S.PresentationParag>

        <S.PresentationParag>
          O escritório se caracteriza pela gestão nos moldes empresariais,
          comprometido com o modelo de governança corporativa e política de
          participação instituída nos lucros e nos resultados. Seu sistema de
          trabalho é essencialmente informatizado, utilizando tecnologia de
          ponta, garantindo que o trabalho seja prestado de maneira rápida e
          eficiente, proporcionando aos clientes e aos advogados informações
          sempre atualizadas e precisas.
        </S.PresentationParag>

        <S.PresentationParag>
          Com a experiência adquirida ao longo desse período, a sociedade busca
          exercer igualmente uma advocacia não apenas justa e moderna, mas
          também significativa e prestativa a seus clientes.
        </S.PresentationParag>

        <S.PresentationPartnersBox>
          <Partners
            image={"/fotos/DavidSombra.png"}
            name="David Sombra Peixoto"
            position="Diretor Presidente"
          />
          <Partners
            image={"/fotos/JoaoPaulo.png"}
            name="João Paulo Sombra Peixoto"
            position="Diretor Comercial"
          />
          <Partners
            image={"/fotos/JoseLuis.png"}
            name="José Luís Melo Garcia"
            position="Diretor Financeiro"
          />
        </S.PresentationPartnersBox>
      </S.PresentationBox>
    </S.PresentationContainer>
  );
};

export default Presentation;
