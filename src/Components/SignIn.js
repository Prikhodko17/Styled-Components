import React, { useEffect, useState } from "react";
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
} from "./Styles";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const userData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (userData?.autoLogin) {
            setEmail(userData.email);
            setPassword(userData.password);
            setRememberMe(true);
        }
    }, []);
    const resetData = () => {
        localStorage.clear();
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (email === userData?.email && password === userData?.password) {
            if (rememberMe) {
                userData.autoLogin = true;
                localStorage.setItem("user", JSON.stringify(userData));
            } else {
                userData.autoLogin = false;
                localStorage.setItem("user", JSON.stringify(userData));
            }
            alert("ви авторизовані");
        } else {
            alert("такого користувача неіснує, створіть акаунт");
        }
        return;
    };

    return (
        <Body className="Body">
            <Container>
                <Header>
                    <IconContainer>
                        <Icon src={require("../Icon/enter.png")} />
                    </IconContainer>
                    <H2>Sign In</H2>
                </Header>
                <Main>
                    <Form>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address*"></Input>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password*"></Input>
                        <CheckboxContainer>
                            <Checkbox onChange={() => setRememberMe(!rememberMe)} checked={rememberMe} type="checkbox"></Checkbox>
                            <PrimaryText>Remember me</PrimaryText>
                        </CheckboxContainer>
                        <Button onClick={submitHandler} disabled={email.length && password.length ? "" : "disabled"}>
                            SIGN IN
                        </Button>
                        <AContainer>
                            <StyledLink onClick={resetData} to="/">
                                Forgot password?
                            </StyledLink>
                            <StyledLink to="/SignUp">Sign Up</StyledLink>
                        </AContainer>
                    </Form>
                </Main>
            </Container>
        </Body>
    );
};

export default SignIn;