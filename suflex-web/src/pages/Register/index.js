import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';
import { useHistory } from 'react-router-dom';
import { faLock, faUserAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../assets/Logo.webp';
import { Container, FormContainer, Link } from './style';

function Register() {
  const history = useHistory();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [senha, setSenha] = useState('');
  const [username, setUsername] = useState('');
  const { register } = useAuth();

  function validateForms() {
    if (nome.trim().length === 0 || nome.trim().length < 4) {
      return false;
    }
    if (sobrenome.trim().length === 0 || sobrenome.trim().length < 4) {
      return false;
    }
    if (senha.trim().length === 0 || senha.trim().length < 4) {
      return false;
    }
    if (username.trim().length === 0 || senha.trim().length < 4) {
      return false;
    }
    return true;
  }
  async function handleRegister(e) {
    e.preventDefault();
    if (validateForms()) {
      const response = await register(nome, sobrenome, username, senha);
      console.log(response);
      if (!response.error) {
        toast.success('Registrado com sucesso!');
        history.push('/');
      } else {
        toast.error(response.error);
      }
    } else {
      toast.error('Preencha todos os campos!');
    }
  }

  return (
    <Container>
      <FormContainer>
        <div class="img">
          <img src={Logo} alt="Logo Suflex" />
        </div>
        <h1>Registrar-se</h1>
        <p>Prencha todas as informações para se cadastrar no sistema!</p>
        <form onSubmit={handleRegister}>
          <Input
            autoFocus
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            icon={faUser}
            placeholder="Nome"
            required
          />
          <Input
            autoFocus
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            icon={faUser}
            placeholder="Sobrenome"
            required
          />
          <Input
            autoFocus
            type="text"
            value={username}
            onChange={({ target }) => {
              if (target.value.match('^[a-zA-Z0-9]*$')) {
                setUsername(target.value);
              }
            }}
            icon={faUserAlt}
            placeholder="Usuário"
          />
          <Input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder="Senha"
            icon={faLock}
            required
          />
          <Button type="submit">Criar conta</Button>
          <span>
            Já possui uma conta?{' '}
            <Link style={{ textDecoration: 'none' }} to={'/'}>
              Fazer login
            </Link>
          </span>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Register;
