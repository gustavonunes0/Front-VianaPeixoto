import { useState } from 'react';
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Cards from "./Cards/index.jsx";
import * as S from "./styles";


const Imprensa = () => {


  return (
    <>
      <MiniHeader />
      <Header />
      <div style={{backgroundColor: '#adbfd0', textAlign: '-webkit-center', padding: '4%'}}>
        <Cards
          foto={"/fotos/Socio1.jpg"} 
          title={"Titulo teste"}
          text1={""}
        />
      </div>
      <Footer />
    </>
  );
};

export default Imprensa;

