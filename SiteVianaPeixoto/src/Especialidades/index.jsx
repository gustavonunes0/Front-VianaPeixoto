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
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie risus cursus ipsum commodo bibendum. Morbi vitae tellus in erat rhoncus blandit sed sed mi. Aliquam sit amet urna varius, vestibulum leo sed, iaculis orci. Etiam commodo mollis nunc, eu dapibus nisi vulputate non. Sed luctus scelerisque magna, eget consectetur urna pellentesque ut.Nullam suscipit magna sit amet ex iaculis mattis. Suspendisse molestie ligula turpis, id finibus nulla posuere id. Fuscerhoncus varius elit quis semper.",
      text2: "Sed justo purus, eleifend finibus lacus sed, tempor cursus turpis. Nam non pretium urna, vel semper sem. Phasellus placerat blandit massa nec tempor. Quisque pellentesque tempus massa sed semper. Integer elementum, augue sed varius sollicitudin, nunc tortor blandit velit, sed venenatis est dui ac nisl. Sed a rutrum ex. Cras sit amet sollicitudin est. Vivamus est turpis, maximus eget eleifend ac, tincidunt ut arcu.",
      text3: "Fusce ultrices congue suscipit. Quisque nunc ante, rutrum consequat leo eget, fringilla rutrum nunc. Vivamus ac aliquam velit. Praesent porttitor, est ut condimentum tincidunt, lectus erat finibus augue, at rutrum orci turpis nec nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eget enim vel nibh dictum rutrum. In hac habitasse platea dictumst. Nulla et risus eget velit ullamcorper malesuada. Aliquam accumsan nibh non aliquam interdum. Praesent cursus porta velit, vel ullamcorper metus vulputate sit amet. Maecenas justo risus, fermentum tempor ex vitae, sodales facilisis elit. Fusce ut egestas ante, in ultricies quam. ",
    },
    {
      title: "SAÚDE SUPLEMENTAR",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie risus cursus ipsum commodo bibendum. Morbi vitae tellus in erat rhoncus blandit sed sed mi. Aliquam sit amet urna varius, vestibulum leo sed, iaculis orci. Etiam commodo mollis nunc, eu dapibus nisi vulputate non. Sed luctus scelerisque magna, eget consectetur urna pellentesque ut.Nullam suscipit magna sit amet ex iaculis mattis. Suspendisse molestie ligula turpis, id finibus nulla posuere id. Fuscerhoncus varius elit quis semper.",
      text2: "Sed justo purus, eleifend finibus lacus sed, tempor cursus turpis. Nam non pretium urna, vel semper sem. Phasellus placerat blandit massa nec tempor. Quisque pellentesque tempus massa sed semper. Integer elementum, augue sed varius sollicitudin, nunc tortor blandit velit, sed venenatis est dui ac nisl. Sed a rutrum ex. Cras sit amet sollicitudin est. Vivamus est turpis, maximus eget eleifend ac, tincidunt ut arcu.",
      text3: "Fusce ultrices congue suscipit. Quisque nunc ante, rutrum consequat leo eget, fringilla rutrum nunc. Vivamus ac aliquam velit. Praesent porttitor, est ut condimentum tincidunt, lectus erat finibus augue, at rutrum orci turpis nec nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eget enim vel nibh dictum rutrum. In hac habitasse platea dictumst. Nulla et risus eget velit ullamcorper malesuada. Aliquam accumsan nibh non aliquam interdum. Praesent cursus porta velit, vel ullamcorper metus vulputate sit amet. Maecenas justo risus, fermentum tempor ex vitae, sodales facilisis elit. Fusce ut egestas ante, in ultricies quam. ",
    },
    {
      title: "DIREITO BANCÁRIO",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie risus cursus ipsum commodo bibendum. Morbi vitae tellus in erat rhoncus blandit sed sed mi. Aliquam sit amet urna varius, vestibulum leo sed, iaculis orci. Etiam commodo mollis nunc, eu dapibus nisi vulputate non. Sed luctus scelerisque magna, eget consectetur urna pellentesque ut.Nullam suscipit magna sit amet ex iaculis mattis. Suspendisse molestie ligula turpis, id finibus nulla posuere id. Fuscerhoncus varius elit quis semper.",
      text2: "Sed justo purus, eleifend finibus lacus sed, tempor cursus turpis. Nam non pretium urna, vel semper sem. Phasellus placerat blandit massa nec tempor. Quisque pellentesque tempus massa sed semper. Integer elementum, augue sed varius sollicitudin, nunc tortor blandit velit, sed venenatis est dui ac nisl. Sed a rutrum ex. Cras sit amet sollicitudin est. Vivamus est turpis, maximus eget eleifend ac, tincidunt ut arcu.",
      text3: "Fusce ultrices congue suscipit. Quisque nunc ante, rutrum consequat leo eget, fringilla rutrum nunc. Vivamus ac aliquam velit. Praesent porttitor, est ut condimentum tincidunt, lectus erat finibus augue, at rutrum orci turpis nec nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eget enim vel nibh dictum rutrum. In hac habitasse platea dictumst. Nulla et risus eget velit ullamcorper malesuada. Aliquam accumsan nibh non aliquam interdum. Praesent cursus porta velit, vel ullamcorper metus vulputate sit amet. Maecenas justo risus, fermentum tempor ex vitae, sodales facilisis elit. Fusce ut egestas ante, in ultricies quam. ",
    },
  ];

  return (
    <>
      <MiniHeader />
      <Header />
      <div style={{backgroundColor: '#adbfd0', textAlign: '-webkit-center', padding: '4%'}}>
        <S.Titulo>NOSSAS ESPECIALIDADES</S.Titulo>
        <div>
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

