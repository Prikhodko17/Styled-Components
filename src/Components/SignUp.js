import React, { useState } from "react";
import {
    Body,
    Button,
    Checkbox,
    Container,
    Footer,
    H2,
    Header,
    Icon,
    Input,
    Main,
    SecondaryText,
    PrimaryText,
    IconContainer,
    Form,
    CheckboxContainer,
    AContainer,
    StyledLink,
    InputContainer,
} from "./Styles";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(true);

    const inputStyle = "1px solid grey";
    const inputErrorStyle = "1px solid red";
    const inputCorrectStyle = "1px solid green";

    const validEmail = /^([A-Za-z0-9_\-\.]{3,})+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,4})$/;
    const validPassword = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (!email.length) {
            e.target.style.border = inputStyle;
            return;
        } else if (validEmail.test(String(e.target.value).toLowerCase())) {
            setEmailError(false);
            e.target.style.border = inputCorrectStyle;
        } else {
            setEmailError(true);
            e.target.style.border = inputErrorStyle;
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (!password.length) {
            e.target.style.border = inputStyle;
            return;
        }
        if (password.length >= 8 && password.length <= 20 && validPassword.test(String(e.target.value))) {
            setPasswordError(false);
            e.target.style.border = inputCorrectStyle;
        } else {
            setPasswordError(true);
            e.target.style.border = inputErrorStyle;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            autoLogin: false,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setEmail("");
        setPassword("");
    };
    return (
        <Body className="Body">
            <Container>
                <Header>
                    <IconContainer>
                        <Icon src={require("../Icon/enter.png")} />
                    </IconContainer>
                    <H2>Sign Up</H2>
                </Header>
                <Main>
                    <Form>
                        <InputContainer>
                            <Input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="First Name*"></Input>
                            <Input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Last Name*"></Input>
                        </InputContainer>
                        <Input type="email" value={email} onChange={emailHandler} placeholder="Email Address*"></Input>
                        <Input type="password" value={password} onChange={passwordHandler} placeholder="Password*"></Input>
                        <CheckboxContainer>
                            <Checkbox type="checkbox"></Checkbox>
                            <PrimaryText>I agree with policy</PrimaryText>
                        </CheckboxContainer>
                        <Button onClick={submitHandler} disabled={emailError || passwordError ? "disabled" : ""}>
                            SIGN UP
                        </Button>
                        <AContainer>
                            <StyledLink to="/">Already have an account? Sign in</StyledLink>
                        </AContainer>
                    </Form>
                </Main>
                <Footer>
                </Footer>
            </Container>
        </Body>
    );
};

export default SignUp;