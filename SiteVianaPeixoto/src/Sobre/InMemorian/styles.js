import styled from "styled-components";

export const InMemorianContainer = styled.div`
  display: flex;
  justify-content: "space-evenly";
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    display:grid;
    gris-template-columns: 1fr;
  }
`;

export const IMLeftColor = styled.div`
  width: 50%;
  height: 50rem;
  background-color: #4d008c;
  @media screen and (max-width: 600px) {
    display:none;
  }
`;

export const IMRightColor = styled.div`
  width: 50%;
  height: 50rem;
  background-color: white;
  @media screen and (max-width: 600px) {
    display:none;
  }
`;

export const IMContent = styled.div`
  width: 87.5rem;
  height: 50rem;
  margin: auto;
  margin-top: -50rem;
  display: flex;
  @media screen and (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 70%;
    display:grid;
    gris-template-columns: 1fr;
    width: 100%;
  }
`;

export const IMContentleft = styled.div`
  width: 40%;
  background-color: #4d008c;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const IMContentRight = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-left: 8rem;
  @media screen and (max-width: 600px) {
    background-color: #4d008c;
    color: #fff;
    padding: 5% 0% 2% 2%;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const IMContentTitle = styled.span`
  color: #8d9ebc;
  font-size: 6rem;
  font-weight: bold;
`;

export const IMContentParag = styled.p`
  font-size: 1.5rem;
  @media screen and (max-width: 600px) {
    padding-bottom: 8%;
    padding-top: 0%;
  }
`;
