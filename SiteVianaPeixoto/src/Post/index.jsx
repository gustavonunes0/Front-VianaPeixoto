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
  const [lastPost, setLastPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post`, { params: { id: postId } })
      .then((res) => {
        console.log(res.data.result[0]);
        setPost(res.data.result[0]);
      });

    axios.get(`${import.meta.env.VITE_API_URL}/post`).then((res) => {
      const list = res.data.result;
      setLastPost(res.data.result[list.length - 1]);
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
          date={new Date(lastPost.createdAt).toLocaleString()}
          title={lastPost.title}
          text1={lastPost.text}
          id={lastPost.id}
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default Post;
