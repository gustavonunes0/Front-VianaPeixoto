import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: #b8c5d7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoginTitle = styled.h1`
  font-size: 20px;
  color: white;
`;

export const InputLogin = styled.input`
  width: 350px;
  height: 40px;
  border: none;
  padding-left: 10px;
`;

export const SubmitLogin = styled.input`
  width: 350px;
  height: 40px;
  border: none;
`;
