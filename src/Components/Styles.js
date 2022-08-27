import styled from "styled-components";
import { Link } from "react-router-dom";
export const PrimaryText = styled.p``;
export const SecondaryText = styled.p`
    color: grey;
`;

export const Body = styled.div`
    background-color: rgb(220, 220, 220);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    width: 420px;
`;

export const Header = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`;
export const IconContainer = styled.div`
    background-color: rgb(119, 136, 153);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
`;
export const Icon = styled.img`
    height: 100%;
    width: 100%;
`;
export const H2 = styled.h2``;

export const Main = styled.div`
    margin-bottom: 45px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 38px;
    input {
        flex: 0 0 auto;
    }
`;
export const Input = styled.input`
    background-color: rgb(119, 136, 153);
    border: 1px solid grey;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px;
    color: white;
`;
export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
export const Checkbox = styled.input`
    margin-right: 10px;
    height: 15px;
    width: 15px;
`;
export const Button = styled.button`
    background-color: rgb(152, 251, 152);
    color: #fff;
    padding: 10px 0px;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
    transition: all 0.2s;
    &:hover {
        background-color: rgb(119, 136, 153);
    }
`;

export const AContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
export const StyledLink = styled(Link)`
    color: rgb(20, 110, 120);
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`;

export const Footer = styled.footer``;