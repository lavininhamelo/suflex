import axios from './axios';

export const user = () => {
  return axios
    .get('/user')
    .then((response) => response.data)
    .catch((er) => er.response.data);
};

export const login = (username, senha) => {
  const data = { senha, username };
  return axios
    .post('/login', data)
    .then((data) => data)
    .catch((er) => er.response.data);
};

export const register = (nome, sobrenome, username, senha) => {
  const data = { nome, sobrenome, senha, username };
  return axios
    .post('/register', data)
    .then((data) => data)
    .catch((er) => er.response.data);
};
