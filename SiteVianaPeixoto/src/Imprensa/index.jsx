import { useState } from 'react';
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Cards from "./Cards/index.jsx";
import * as S from "./styles";


const Imprensa = () => {

  const cardsData = [
    {
      foto: "/fotos/Socio1.jpg",
      title: "Aqui segue o titulo do texto",
      text1: "Morbi urna purus, egestas eu vestibulum eget, bibendum vitae eros. Maecenas ut pulvinar eros, a porttitor nisi. Proin commodo euismod luctus. Proin metus neque, mollis eget ex ut, vulputate blandit..."
    },
    {
      foto: "/fotos/Socio2.jpg",
      title: "Aqui segue o titulo do texto",
      text1: "Morbi urna purus, egestas eu vestibulum eget, bibendum vitae eros. Maecenas ut pulvinar eros, a porttitor nisi. Proin commodo euismod luctus. Proin metus neque, mollis eget ex ut, vulputate blandit..."
    },
    {
      foto: "/fotos/Socio3.jpg",
      title: "Aqui segue o titulo do texto",
      text1: "Morbi urna purus, egestas eu vestibulum eget, bibendum vitae eros. Maecenas ut pulvinar eros, a porttitor nisi. Proin commodo euismod luctus. Proin metus neque, mollis eget ex ut, vulputate blandit..."
    },
  ];

  return (
    <>
      <MiniHeader />
      <Header />
      <div style={{backgroundColor: '#adbfd0', textAlign: '-webkit-center', padding: '4%'}}>
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            foto={card.foto} 
            title={card.title}
            text1={card.text1}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Imprensa;
