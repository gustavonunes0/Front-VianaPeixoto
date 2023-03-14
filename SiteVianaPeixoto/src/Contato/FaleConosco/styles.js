import styled from "styled-components";

export const Container = styled.div`
    padding-top: 3.5%;
    padding-bottom: 2.5%;
    width:100%;
    background-color: #6c808c;
    text-align: -webkit-center;
    @media screen and (max-width: 800px) {
        padding-top: 5%;
        padding-bottom: 5%;
    }
`;
export const Titulo = styled.span`
    font-size: 3rem;
    color: #adbfd0;
    font-weight: 100;
    `;
export const Descricao = styled.p`
    font-size: 1.1rem;
    color: #adbfd0;
    width: 70%;
`;
export const Botao = styled.button`
    width:20%;
    font-size: 1rem;
    height: 2rem;
    background-color: #472e8d;
    color: #a6a9aa;
    border: none;
    
    @media screen and (max-width: 800px) {
        width: 50%;
    }
`;
export const Botao2 = styled.button`
    width:100%;
    font-size: 1rem;
    height: 2.3rem;
    background-color: #6c808c;
    color: #adbfd0;
    border: 1px solid #adbfd0;
    border-radius: 0.4rem;
    
    &:hover{
        background-color: #adbfd0;
        color: #6c808c;
    }

    @media screen and (max-width: 800px) {
        width: 50%;
    }
`;
export const linkA = styled.a`
    width: 20%;
    text-decoration: none;
    color: #adbfd0;
    &:hover{
        color: #6c808c;
    }
`;
export const Forms = styled.div`
    width:50%;
    margin-top: 2%;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;
export const FinalForms = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    text-align: left;
`;
export const Input1 = styled.input`
    width: 50%;
    height: 3rem;
    border: 3px solid #6c808c;
    font-size: 1.25rem;
    padding-left: 1%;

    &:focus{
        outline-color: aliceblue;
    }
    &::placeholder{
        color: #a6a9aa;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;

export const Input2 = styled.input`
    width: 100%;
    height: 3rem;
    border: 3px solid #6c808c;
    font-size: 1.25rem;
    padding-left: 1%;

    &:focus{
        outline-color: aliceblue;
    }
    &::placeholder{
        color: #a6a9aa;
    }
    
    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;

export const Input3 = styled.textarea`
    margin-top: 3%;
    width: 100%;
    height: 13rem;
    border: 3px solid #6c808c;
    font-size: 1.25rem;
    padding-left: 1%;

    &:focus{
        outline-color: aliceblue;
    }

    &::placeholder{
        color: #a6a9aa;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;

