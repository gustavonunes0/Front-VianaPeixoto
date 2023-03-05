import styled from "styled-components";

export const InMemorianContainer = styled.div`
  display: flex;
  justify-content: "space-evenly";
  flex-wrap: wrap;
`;

export const IMLeftColor = styled.div`
  width: 50%;
  height: 50rem;
  background-color: #4d008c;
`;

export const IMRightColor = styled.div`
  width: 50%;
  height: 50rem;
  background-color: white;
`;

export const IMContent = styled.div`
  width: 87.5rem;
  height: 50rem;
  margin: auto;
  margin-top: -50rem;
  display: flex;
`;

export const IMContentleft = styled.div`
  width: 40%;
  background-color: #4d008c;
`;

export const IMContentRight = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 8rem;
`;

export const IMContentTitle = styled.span`
  color: #8d9ebc;
  font-size: 6rem;
  font-weight: bold;
`;

export const IMContentParag = styled.p`
  font-size: 1.5rem;
`;
