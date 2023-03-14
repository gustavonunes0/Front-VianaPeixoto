import * as S from "./styles.js"

const FaleConosco = () => {
    return (
        <>
            <S.Container>
                <S.Titulo>FALE CONOSCO</S.Titulo>
                <S.Descricao>Este canal é um instrumento para uma maior interação com o Viana Peixoto e Advogados Associados. Para opiniões, críticas e sugestões ou
                                                    para obter mais informações sobre o nosso escritório, entre em contato por meio do formulário abaixo.
                </S.Descricao>
                <S.Forms>
                    <S.Input1 type={Text}
                        placeholder="NOME*"></S.Input1>
                    <S.Input1 type={Text}
                        placeholder="SOBRENOME*"></S.Input1>
                    <S.Input2 type={Text}
                        placeholder="EMAIL*"></S.Input2>
                    <S.Input1 type={Text}
                        placeholder="EMPRESA"></S.Input1>
                    <S.Input1 type={Text}
                        placeholder="TELEFONE"></S.Input1>
                    <S.Input3 type={Text}
                        placeholder="DIGITE SEU TEXTO AQUI"></S.Input3>
                    <S.FinalForms>
                        <S.Descricao>*Campos obrigatórios</S.Descricao>
                        <S.Botao>Enviar</S.Botao>
                    </S.FinalForms>
                </S.Forms>
                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3rem',
                        alignItems: 'center',
                        marginTop: '4%',
                        marginBottom: '3%'
                    }
                }>
                    <S.linkA target={'_blank'} href="https://corp-rh.fortestecnologia.com.br/fortesrhpg_recuperacao/externo/prepareListAnuncio.action?empresaId=4">
                        <S.Botao2>TRABALHE CONOSCO</S.Botao2>
                    </S.linkA>
                    <S.linkA>
                        <S.Botao2>NEGOCIE SUAS DÍVIDAS</S.Botao2>
                    </S.linkA>
                </div>
            </S.Container>
        </>
    );
};

export default FaleConosco;

