import { useState, useEffect } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Cards from "./Cards/index.jsx";
import axios from "axios";
import * as S from "./styles";

const Imprensa = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post`)
      .then((res) => {
        console.log(res.data.result);
        setPosts(res.data.result);
      })
      .catch((err) => {
        console.log("erro");
      });
  }, []);

  return (
    <>
      <MiniHeader />
      <Header />
      <div
        style={{
          backgroundColor: "#adbfd0",
          textAlign: "-webkit-center",
          padding: "4%",
        }}
      >
        <S.PremioContainer>
          <S.Premio src="/fotos/VPSitefoto4.jpg" />
        </S.PremioContainer>
        {posts &&
          posts
            .filter((post) => post.title)
            .map((card, index) => {
              if (card.title) {
                return (
                  <Cards
                    key={index}
                    foto={card.imageUrl}
                    title={card.title}
                    text1={card.text}
                    postId={card.id}
                  />
                );
              }
            })}
      </div>
      <Footer />
    </>
  );
};

export default Imprensa;
