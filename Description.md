DESCRIPTION
Desenvolva uma aplicação contenha todos os parâmetros à seguir: 
 
DATABASE - POSTGRESQL
---------------------------------------------------------------------------------------------------
usuario
    * id int
       nome text
       sobrenome text
       username text
        senha text
        salt text
        datacriacao timestamp

---------------------------------------------------------------------------------------------------
BACKEND (RESTFUL) - NODEJS
- CRUD de Usuários
- O campo 'salt' deve ser gerado randomicamente ao criar o usuário
- A senha deve ser uma hash sha256 gerada à partir de uma tripla iteração da concatenação 'senha' + 'salt'
- JSON Web Token como autenticação dos requests

---------------------------------------------------------------------------------------------------
FRONTEND - REACTJS + BOOTSTRAP
- Página de Login -> POST para um método de login que cria um cookie para autenticações futuras
- Página de CRUD de usuários
