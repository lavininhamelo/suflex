import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/Logo.webp';
import { Container, FormContainer, Link } from './style';

function Login() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();
  function validateForms() {
    if (username.trim().length === 0) {
      return false;
    }
    if (senha.trim().length === 0) {
      return false;
    }

    return true;
  }
  async function handleLogin(e) {
    e.preventDefault();

    if (validateForms()) {
      const response = await login(username, senha);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success('Logado com sucesso!');
      }
    } else {
      toast.error('Por favor, preencha os campos corretamente!');
    }
  }

  return (
    <Container>
      <FormContainer>
        <div class="img">
          <img src={Logo} alt="Logo Suflex" />
        </div>
        <h1>Fazer login</h1>
        <p>Bem vindo! Se autentifique no sistema para ter acesso.</p>
        <form onSubmit={handleLogin}>
          <Input
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={faUser}
            placeholder="Username"
            required
          />
          <Input
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder="Senha"
            icon={faLock}
          />
          <Button type="submit">Fazer login</Button>
          <span>
            Não possui uma conta?{'  '}
            <Link style={{ textDecoration: 'none' }} to={'/register'}>
              Criar conta
            </Link>
          </span>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;
