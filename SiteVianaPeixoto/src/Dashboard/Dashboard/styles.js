import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 5rem 0rem;
  background-color: #adbfd0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PostsContainer = styled.div`
  width: 87.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  font-size: 2rem;
  font-weight: bold;
`;

export const DashbLabel = styled.label`
  width: 80%;
  text-align: start;
`;

export const DashboardInput = styled.input`
  width: 80%;
  min-height: 40px;
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const DashbTextarea = styled.textarea`
  width: 80%;
  min-height: 20rem;
  border: none;
  font-size: 1.5rem;
  padding: 1rem;
`;

export const UsersAdmContainer = styled.div`
  width: 87.5rem;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
