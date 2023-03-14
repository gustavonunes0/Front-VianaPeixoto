import { useState } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import {
  DashbLabel,
  DashboardContainer,
  DashboardInput,
  DashbTextarea,
  PostsContainer,
} from "./Dashboard/styles";
import {
  InputLogin,
  LoginContainer,
  LoginTitle,
  SubmitLogin,
} from "./Login/styles";
import { OptionsBox, OptionsButton } from "./styles";

const Dashboard = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const [titulo, setTitulo] = useState();
  const [texto, setTexto] = useState();
  const [imagem, setImagem] = useState();

  const [user, setUser] = useState();
  const [tela, setTela] = useState("posts");

  const handleLogin = () => {
    setUser(true);
  };

  return (
    <>
      <Header />

      {!user ? (
        <LoginContainer>
          <LoginTitle>Acessar dashboard</LoginTitle>
          <InputLogin
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLogin
            type="password"
            required
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <SubmitLogin type="submit" onClick={handleLogin} />
        </LoginContainer>
      ) : (
        <DashboardContainer>
          <OptionsBox>
            <OptionsButton
              onClick={() => {
                setTela("posts");
              }}
            >
              POSTS
            </OptionsButton>
            <OptionsButton
              onClick={() => {
                setTela("usuarios");
              }}
            >
              USUARIOS
            </OptionsButton>
          </OptionsBox>
          {tela === "posts" ? (
            <PostsContainer>
              <DashbLabel>Título</DashbLabel>
              <DashboardInput
                type="text"
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />

              <DashbLabel>Texto</DashbLabel>
              <DashbTextarea
                onChange={(e) => {
                  setTexto(e.target.value);
                }}
              />

              <DashbLabel>Imagem</DashbLabel>
              <DashboardInput
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setImagem(e.target.files[0]);
                }}
              />
            </PostsContainer>
          ) : (
            <LoginContainer>
              <LoginTitle>Registrar novo usuário</LoginTitle>
              <InputLogin type="email" required />
              <InputLogin type="password" required />
              <InputLogin type="password" required />
              <SubmitLogin
                type="submit"
                onClick={() => {
                  console.log(
                    "titulo: ",
                    titulo,
                    "texto: ",
                    texto,
                    "imagem: ",
                    imagem
                  );
                }}
              />
            </LoginContainer>
          )}
        </DashboardContainer>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
