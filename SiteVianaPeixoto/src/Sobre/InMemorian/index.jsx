import React from 'react';
import "./styles.css";


const Timeline = () => {
    const timelineData = [
        {
            side: "right",
            title: "1988",
            text: "VIANA PEIXOTO nasce por meio da sociedade formada  entre dois advogados, então empregados do Banco do Brasil, tendo  sido presidido pelo sócio Miguel Oscar Viana Peixoto, atuando  basicamente nas áreas de direito empresarial, bancário e de família;"
        },
        {
            side: "left",
            title: "1995",
            text: "Primeiro contrato de contencioso com Instituição Financeira, que norteou o foco  na advocacia no ramo do direito bancário  e recuperação de crédito, atuando principalmente em ações de alto valor e  alta complexidade;"
        },
        {
            side: "right",
            title: "2000",
            text: "Formalização da sociedade junto à OAB e início de trabalhos na área de contencioso  de massa, atuando para diversas  instituições financeiras, públicas e privadas,  e grandes grupos empresariais. Acervo de  1500 processos;"
        },
        {
            side: "left",
            title: "2010",
            text: "Expansão do escritório e atuação em contencioso de massa, crescimento e abertura de filiais e sucursais, atuando nos estados do Nordeste, em  especial: CE, PI, RN e PB. Acervo processual passa de 4 mil processos  para 45 mil processos em um ano. Investimentos em tecnologia da  informação e comunicação, infraestrutura e capital humano."
        }, 
        {
            side: "right",    
            title: "2012",
            text: "Ampliação da carteira de recuperação de crédito com  instalação de Contact Center  para auxiliar no êxito dos  processos e atuar na fase de  cobrança pré-processual."
        },
        {
            side: "left",    
            title: "2014",
            text: "Ampliação da área de atuação para todos os estados do Norte e  Nordeste e início da atuação nas áreas de Direito Securitário e de Saúde,  com forte inovação de teses e investimentos tecnológicos, mostrando  para o mercado o acompanhamento do contencioso de massa de  forma individualizada, com grande nível técnico e excelente resultados;"
        },
        {
            side: "right",    
            title: "2015",
            text: "Ampliação da carteira de clientes com a entrada de grandes instituições financeiras e consolidação da atuação a nível nacional."
        },
        {
            side: "left",    
            title: "2016",
            text: "Criação de célula estratégica de feitos  relevantes para atuação em processos  de alta complexidade, atuando em todo  o território nacional com 10 filiais."
        },
        {
            side: "right",    
            title: "2017",
            text: "Em 2017 com a consultoria da Gomes  de Matos foi criado o PCCR e passamos  por uma consultoria para Excelência  Operacional."
        },
        {
            side: "left",    
            title: "2022",
            text: "Fortalecemos o nosso propósito  com ações estratégicas, consolidação e certificação de processos, bem como o aprimoramento do controle interno, visando a utilização de jurimetria, alcançando maior efetividade na solução das demandas."
        },
    ];

    return (
        <div style={{height: '100%', backgroundColor: '#b8c5d7', textAlign: '-webkit-center', padding:'4rem'}}>
            <span className='tituloHistoria'>Nossa história</span>
            <ul className="timeline">
                {
                timelineData.map((data, index) => (
                  <li className={`timeline-${data.side}`} key={index}>
                    <div className="timeline-content">
                      <p>{data.text}</p>
                    </div>
                    <span className="dot">{data.title}</span>
                    {index !== timelineData.length - 1 && <div className="line"></div>}
                  </li>
                ))
            } </ul>
        </div>
    );
};

export default Timeline;

