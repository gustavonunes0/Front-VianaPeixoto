import { useState } from 'react';
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Cards from "./Cards/index.jsx";
import * as S from "./styles";


const Especialidades = () => {
  

  const [selectedCard, setSelectedCard] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedCard(index);
  }

  const cards = [
    {
      title: "DIREITO SECURITÁRIO",
      text1: "O Direito Securitário contempla o atendimento contencioso e consultivo das relações contratuais de seguros, tratando dos direitos e obrigações das partes envolvidas nas negociações.",
      text2: "Além de forma consultiva e contenciosa, o escritório Viana Peixoto atua perante órgãos do mercado segurador como SUSEP e CNSP.",
      text3: "Também apoia as seguradoras na restituição de salvados e pareceres para subsidiar decisões na matéria securitária.",
    },
    {
      title: "SAÚDE SUPLEMENTAR",
      text1: "A saúde suplementar é o conjunto das atividades desenvolvidas pelas operadoras de planos e seguros privados de assistência médica à saúde e que não possuem vínculos com o Sistema Único de Saúde (SUS), conforme estabelecido pela Lei 9.658/1998.",
      text2: "As operadoras que compõem a estrutura empresarial do setor de saúde suplementar se classificam em diferentes modalidades de atuação no mercado: medicinas de grupo; seguradoras especializadas em saúde, cooperativas médicas; filantropias; autogestões; odontologias de grupo; cooperativas odontológicas; e, administradoras de benefício.",
      text3: "Nossa missão é garantir a defesa dos interesses das operadoras que atuam na assistência suplementar, fortalecendo ações estratégicas para que mantenham uma reputação respeitada no mercado. ",
    },
    {
      title: "DIREITO BANCÁRIO",
      text1: "O Direito Bancário é ramo do Direito Privado especializado no tratamento do dinheiro, das instituições vocacionadas a trabalhar com ele.",
      text2: "Nele encontramos o conjunto de princípios e normas jurídicas que regulam a atividade bancária, a constituição e funcionamento das instituições financeiras.",
      text3: "Para o Viana Peixoto, o objetivo é melhorar o relacionamento das instituições financeiras com as corporações, resguardando seus interesses e assim evitando possíveis transtornos.",
    },
  ];

  return (
    <>
      <MiniHeader />
      <Header />
      <div style={{backgroundColor: '#adbfd0', textAlign: '-webkit-center', padding: '4%'}}>
        <S.Titulo>NOSSAS ESPECIALIDADES</S.Titulo>
        <div style={{display: 'flex', placeContent: 'center'}}>
          {cards.map((card, index) => (
            <S.Botao key={index}
            onClick={() => handleButtonClick(index)}
            style={{
              backgroundColor: selectedCard === index ? "#472e8d" : "#6c808c",
            }}
          >
            {card.title}
            </S.Botao>
          ))}
        </div>
        <Cards 
          title={cards[selectedCard].title}
          text1={cards[selectedCard].text1}
          text2={cards[selectedCard].text2}
          text3={cards[selectedCard].text3}
        />
      </div>
      <Footer />
    </>
  );
};

export default Especialidades;

