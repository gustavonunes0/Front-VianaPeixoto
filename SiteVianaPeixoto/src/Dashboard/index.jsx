import { useState } from "react";
import axios from "axios";
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
  const [senha2, setSenha2] = useState();

  const [titulo, setTitulo] = useState();
  const [texto, setTexto] = useState();
  const [imagem, setImagem] = useState();

  const [user, setUser] = useState();
  const [tela, setTela] = useState("posts");

  const [userMode, setUserMode] = useState("create");
  const [postMode, setPostMode] = useState("create");

  const [posts, setPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState();

  const handleLogin = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/user`, {
        params: { email, senha },
      })
      .then((res) => {
        if (!res.data.result) throw "Deu ruim";
        setUser(res.data.result);
      })
      .catch((err) => {
        window.alert("Erro ao fazer login");
      });
  };

  const createUser = () => {
    if (!email || !senha) return window.alert("Falta(m) e-mail e/ou senha");
    if (senha !== senha2) return window.alert("As senhas diferem");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("senha", senha);
    formData.append("image", imagem);

    axios
      .post(`${import.meta.env.VITE_API_URL}/user`, formData, {
        headers: {
          ["x-access-token"]: user ? user.token : "",
        },
      })
      .then(() => {
        setEmail("");
        setSenha("");
        setSenha2("");
        setImagem(undefined);
        window.alert("Usuario cadastrado com sucesso!");
      })
      .catch(() => {
        window.alert("Falha ao registrar usuario");
      });
  };

  const deleteUser = () => {
    if (!email || !senha) return window.alert("Falta(m) e-mail e/ou senha");

    axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/user`,
      data: {
        email,
        senha,
      },
      headers: {
        ["x-access-token"]: user ? user.token : "",
      },
    })
      .then(() => {
        setEmail("");
        setSenha("");
        setSenha2("");
        setImagem(undefined);
        window.alert("Usuario deletado com sucesso!");
      })
      .catch(() => {
        window.alert("Falha ao deletar usuario");
      });
  };

  ////////////////
  const getAllPost = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/post`, {
        headers: {
          ["x-access-token"]: user ? user.token : "",
        },
      })
      .then((res) => {
        setPosts(res.data.result);
      });
  };

  const createPost = () => {
    try {
      if (!titulo || !texto)
        return window.alert("Falta(m) o título e/ou o texto");

      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("text", texto);
      formData.append("userId", user.id);
      if (imagem) formData.append("imagem", imagem);

      axios
        .post(`${import.meta.env.VITE_API_URL}/post`, formData, {
          headers: {
            ["x-access-token"]: user ? user.token : "",
          },
        })
        .then(() => {
          setTitulo("");
          setTexto("");
          setImagem(undefined);
          window.alert("Post criado com sucesso!");
        })
        .catch(() => {
          window.alert("Falha ao criar o post");
        });
    } catch (error) {}
  };

  const editPost = () => {
    try {
      if (!titulo || !texto)
        return window.alert("Falta(m) o título e/ou o texto");

      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("text", texto);
      formData.append("id", selectedPost);
      if (imagem) formData.append("imagem", imagem);

      axios
        .put(`${import.meta.env.VITE_API_URL}/post`, formData, {
          headers: {
            ["x-access-token"]: user ? user.token : "",
          },
        })
        .then(() => {
          setTitulo("");
          setTexto("");
          setImagem(undefined);
          window.alert("Post editado com sucesso!");
        })
        .catch(() => {
          window.alert("Falha ao editar o post");
        });
    } catch (error) {}
  };

  const deletePost = () => {
    if (!selectedPost) return window.alert("Selecione um post para apagar");
    console.log(selectedPost);
    axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/post`,
      data: {
        id: selectedPost,
      },
      headers: {
        ["x-access-token"]: user ? user.token : "",
      },
    })
      .then(() => {
        setSelectedPost(undefined);
        setTitulo("");
        setTexto("");
        setImagem(undefined);
        window.alert("Post apagado com sucesso");
      })
      .catch(() => {
        window.alert("Falha ao apagar o post");
      });
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
              <OptionsBox style={{ marginTop: 20 }}>
                <OptionsButton
                  onClick={() => {
                    setPostMode("create");
                  }}
                >
                  CRIAR
                </OptionsButton>
                <OptionsButton
                  onClick={() => {
                    getAllPost();
                    setPostMode("edit");
                  }}
                >
                  EDITAR
                </OptionsButton>

                <OptionsButton
                  onClick={() => {
                    getAllPost();
                    setPostMode("delete");
                  }}
                >
                  APAGAR
                </OptionsButton>
              </OptionsBox>

              {postMode !== "create" && (
                <OptionsBox style={{ marginTop: 20 }}>
                  <h5>Escolha um post</h5>
                  <select
                    name="cars"
                    id="cars"
                    onChange={(e) => {
                      const postt = JSON.parse(e.target.value);
                      console.log(postt);
                      setSelectedPost(postt.id);
                      setTitulo(postt.title);
                      setTexto(postt.text);
                    }}
                  >
                    <option></option>
                    {posts.map((post, index) => {
                      return (
                        <option key={index} value={JSON.stringify(post)}>
                          {post.title}
                        </option>
                      );
                    })}
                  </select>
                </OptionsBox>
              )}

              <DashbLabel>Título</DashbLabel>
              <DashboardInput
                value={titulo}
                type="text"
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />

              <DashbLabel>Texto</DashbLabel>
              <DashbTextarea
                value={texto}
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

              <SubmitLogin
                style={{
                  fontSize: 22,
                  padding: 10,
                  height: 50,
                  fontWeight: "bold",
                }}
                value={`${
                  postMode === "create"
                    ? "PUBLICAR"
                    : postMode === "delete"
                    ? "APAGAR"
                    : "EDITAR"
                }`}
                type="submit"
                onClick={() => {
                  if (postMode === "edit") {
                    editPost();
                  } else if (postMode === "create") {
                    createPost();
                  } else {
                    deletePost();
                  }
                }}
              />
            </PostsContainer>
          ) : (
            <LoginContainer>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <button
                  style={{
                    padding: 5,
                    fontSize: 14,
                    backgroundColor: `${
                      userMode !== "create" ? "white" : "lightgray"
                    }`,
                  }}
                  onClick={() => {
                    setUserMode("create");
                  }}
                >
                  REGISTRAR
                </button>

                <button
                  style={{
                    padding: 5,
                    fontSize: 14,
                    backgroundColor: `${
                      userMode !== "create" ? "lightgray" : "white"
                    }`,
                  }}
                  onClick={() => {
                    setUserMode("delete");
                  }}
                >
                  APAGAR
                </button>
              </div>
              <LoginTitle>
                {userMode === "create" ? "Resgitrar " : "Apagar "}novo usuário
              </LoginTitle>
              <InputLogin
                placeholder="Digite seu nome"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputLogin
                placeholder="Digite uma senha"
                type="password"
                required
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />
              {userMode === "create" && (
                <InputLogin
                  placeholder="Confirme sua senha"
                  type="password"
                  required
                  onChange={(e) => {
                    setSenha2(e.target.value);
                  }}
                />
              )}

              <InputLogin
                placeholder="Confirme sua senha"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setImagem(e.target.files[0]);
                }}
              />

              {userMode === "create" ? (
                <SubmitLogin
                  value="Cadastrar"
                  type="submit"
                  onClick={() => {
                    createUser();
                  }}
                />
              ) : (
                <SubmitLogin
                  value="Deletar"
                  type="submit"
                  onClick={() => {
                    deleteUser();
                  }}
                />
              )}
            </LoginContainer>
          )}
        </DashboardContainer>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
