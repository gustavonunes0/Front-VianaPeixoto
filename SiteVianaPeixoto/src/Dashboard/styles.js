import styled from "styled-components";

export const OptionsBox = styled.div`
  width: 100%;
  background-color: #adbfd0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OptionsButton = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;
