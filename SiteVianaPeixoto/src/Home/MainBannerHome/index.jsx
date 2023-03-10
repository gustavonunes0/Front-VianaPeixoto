import { SobreBannerContainer, ConteudoProvisorio, TextoSecundario, Botao } from "./styles";
import { useState } from 'react';

const MainBanner = () => {
  const [display, setDisplay] = useState('none');

  function handleClick() {
    setDisplay(display === 'none' ? 'block' : 'none');
  }
  
  return (
    <SobreBannerContainer>
      <ConteudoProvisorio>
        <span>Com a experiência adquirida ao longo de 35 anos, a sociedade busca exercer igualmente uma advocacia não apenas justa e moderna, mas também significativa e prestativa a seus cliente</span>
        <TextoSecundario>
          <p>A história do escritório Viana Peixoto Advogados Associados começa em 1988, com o advogado Miguel Oscar Viana Peixoto (in memoriam). Antes, a empresa chamava-se Pontes Peixoto Advogados e Associado</p>
          <p>O jurista, que ocupou importantes cargos no Banco do Brasil (de 1983 até 2006), chegando a exercer a função de Diretor Jurídico nacional da instituição, observou a necessidade de atender as demandas jurídicas da sociedade em Fortaleza.</p>
          <div style={{ display: display }}>
            <p>A mudança de nome ocorreu em 20XX, mas a qualidade, a ética e as soluções jurídicas personalizadas para os clientes permaneceram.</p>
            <p>O escritório Viana Peixoto Advogados Associados caracteriza-se pela gestão nos moldes empresariais, comprometido com o modelo de governança corporativa e política de participação instituída nos lucros e nos resultado</p>
            <p>Seu sistema de trabalho é essencialmente informatizado. Isso porque utiliza tecnologia de ponta, garantindo que o trabalho seja prestado de maneira rápida e eficiente, proporcionando ao cliente e aos advogados informações sempre atualizadas e precisa</p>
          </div>
        </TextoSecundario>
        <Botao onClick={handleClick}>
          {display === 'none' ? 'Leia Mais' : 'Mostrar Menos'}
        </Botao>
      </ConteudoProvisorio>
    </SobreBannerContainer>
  );
};

export default MainBanner;
