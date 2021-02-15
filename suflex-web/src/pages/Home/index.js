import React from 'react';
import { Container } from './style.js';
import { useAuth } from '../../contexts/auth';

export const Home = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <h1>Bem vindo(a) {user.nome + ' ' + user.sobrenome}</h1>
      <p>Seu usuário é: {user.username}</p>
      <span onClick={() => logout()}>Sair</span>
    </Container>
  );
};

export default Home;
