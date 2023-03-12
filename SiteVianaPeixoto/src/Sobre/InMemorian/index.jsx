import * as S from "./styles";

const InMemorian = () => {
  return (
    <S.InMemorianContainer>
      <S.IMLeftColor />
      <S.IMRightColor />
      <S.IMContent>
        <S.IMContentleft />
        <S.IMContentRight>
          <S.IMContentTitle>História</S.IMContentTitle>

          <S.IMContentParag>
            Fundada pelo Advogado Miguel Oscar Viana Peixoto (in memoriam), a
            sociedade VIANA PEIXOTO ADVOGADOS ASSOCIADOS, atual denominação de
            PONTES E PEIXOTO ADVOGADOS ASSOCIADOS, iniciou suas atividades em
            1988. Simultaneamente à atividade que exercia no escritório, o
            jurista cumulou o exercício da advocacia junto ao Banco do Brasil
            S/A, na qualidade de empregado.
          </S.IMContentParag>

          <S.IMContentParag>
            O Dr. Miguel Oscar Viana Peixoto assumiu o cargo de advogado do
            Banco do Brasil em 1983, vindo a exercer a função de supervisor
            jurídico do período de 1992 a 1995. Em meados de 1995, foi nomeado
            chefe do departamento jurídico, exercendo o cargo até o ano de 2003,
            quando foi investido no cargo de Diretor Jurídico Nacional da
            Instituição. Ali permaneceu até o ano de 2006, quando se aposentou,
            passando a se dedicar exclusivamente ao escritório de advocacia.
          </S.IMContentParag>
        </S.IMContentRight>
      </S.IMContent>
    </S.InMemorianContainer>
  );
};

export default InMemorian;
