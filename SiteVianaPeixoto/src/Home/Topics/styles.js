import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #6c808c;
  padding: 0rem 5rem 0rem 10rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 20% 10% 30% 10%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: -25%;
  padding: 25% 10% 10% 10%;

  &:hover{
    background-color: #472e8d;
  }
`;
export const ContentFirst = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: -25%;
  padding: 25% 10% 10% 10%;

  &:hover{
    background-color: #472e8d;
  }
  @media screen and (max-width: 800px) {
    padding: 10% 10% 0% 10%;
  }
`;
export const IconTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  font-family: 'Titillium Web';
  color: #fff;
  line-height: 3rem;
  white-space: nowrap;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
export const TopicText = styled.div`
  font-size: 0.95rem;
  font-weight: 400;
  font-family: 'Titillium Web';
  color: #fff;
  line-height: 1.5rem;

  @media screen and (max-width: 800px) {
    font-size:1.5rem;
  }
`;
export const IconTopics = styled.img`
  height:10%; 
  align-self: start;
`;
export const IconTopics2 = styled.img`
  height:10%; 
  align-self: start;
  
@media screen and (max-width: 800px) {
  height:20%; 
  }
`;