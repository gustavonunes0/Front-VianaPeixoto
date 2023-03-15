import { useState } from 'react';
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Card from "./Card/index.jsx";
import LastPosts from "./LastPosts/index.jsx"
import * as S from "./styles";


const Post = () => {

  return (
    <>
      <MiniHeader />
      <Header />
      <S.Container>
      <Card
          foto={"/fotos/Socio1.jpg"} 
          date={"14 de Março de 2023"}
          title={"Aqui segue o titulo do texto"}
          text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin semper sollicitudin. Donec elementum suscipit ligula. Aliquam non dapibus ipsum. Sed auctor tempor odio in sodales. Phasellus tincidunt ipsum nec erat rutrum, sit amet iaculis sapien pellentesque. Sed interdum urna vitae est fringilla, sed pretium sapien pretium. Donec lobortis, massa sit amet auctor ullamcorper, lectus arcu egestas erat, sit amet finibus mauris tellus a lectus. Suspendisse metus ligula, suscipit id dictum at, rhoncus sed urna. Praesent odio sem, rhoncus eu felis eu, sollicitudin pellentesque nulla."}
          text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin semper sollicitudin. Donec elementum suscipit ligula. Aliquam non dapibus ipsum. Sed auctor tempor odio in sodales. Phasellus tincidunt ipsum nec erat rutrum, sit amet iaculis sapien pellentesque. Sed interdum urna vitae est fringilla, sed pretium sapien pretium. Donec lobortis, massa sit amet auctor ullamcorper, lectus arcu egestas erat, sit amet finibus mauris tellus a lectus. Suspendisse metus ligula, suscipit id dictum at, rhoncus sed urna. Praesent odio sem, rhoncus eu felis eu, sollicitudin pellentesque nulla."}
          text3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin semper sollicitudin. Donec elementum suscipit ligula. Aliquam non dapibus ipsum. Sed auctor tempor odio in sodales. Phasellus tincidunt ipsum nec erat rutrum, sit amet iaculis sapien pellentesque. Sed interdum urna vitae est fringilla, sed pretium sapien pretium. Donec lobortis, massa sit amet auctor ullamcorper, lectus arcu egestas erat, sit amet finibus mauris tellus a lectus. Suspendisse metus ligula, suscipit id dictum at, rhoncus sed urna. Praesent odio sem, rhoncus eu felis eu, sollicitudin pellentesque nulla."}
        />
        <LastPosts
        date={"14 de Março de 2023"}
        title={"Aqui segue o titulo do texto"}
        text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin semper sollicitudin. Donec elementum suscipit ligula. Aliquam non dapibus ipsum. Sed auctor tempor odio in sodales. Phasellus tincidunt ipsum nec erat rutrum, sit amet iaculis sapien pellentesque."}
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default Post;
