import { useState, useEffect } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import MiniHeader from "../shared/MiniHeader";
import Card from "./Card/index.jsx";
import LastPosts from "./LastPosts/index.jsx";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post`, { params: { id: postId } })
      .then((res) => {
        console.log(res.data.result[0]);
        setPost(res.data.result[0]);
      });
  }, []);

  return (
    <>
      <MiniHeader />
      <Header />
      <S.Container>
        <Card
          foto={post.imageUrl}
          date={new Date(post.createdAt).toLocaleString()}
          title={post.title}
          text1={post.text}
          author={post.authorName}
        />
        <LastPosts
          date={"14 de Março de 2023"}
          title={"Aqui segue o titulo do texto"}
          text1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin semper sollicitudin. Donec elementum suscipit ligula. Aliquam non dapibus ipsum. Sed auctor tempor odio in sodales. Phasellus tincidunt ipsum nec erat rutrum, sit amet iaculis sapien pellentesque."
          }
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default Post;
