import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import Input from "../../components/input";
import Button from "../../components/button";

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <form>
                <h1>Faça seu login</h1>
                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} name="Senha" type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
                <a href="teste">Esqueci minha senha</a>
            </form>

            <a href="teste">
                <FiLogIn />
                Criar conta
                </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;