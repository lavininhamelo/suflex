import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Logo from '../../assets/Logo.webp';
import { ButtonOptions, Nav, UserDiv } from './style.js';

export default ({ history, name, icon, to }) => {
  const { user, logout } = useAuth();
  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <Nav>
        <Link className="lateral" to="/">
          {' '}
          <img src={Logo} alt="Logo Suflex" height="30" />
        </Link>
        <span className="header-name">{name || 'Sem nome'}</span>
        <div className="lateral">
          <UserDiv>
            <div className="group">
              <div className="info">
                <span>
                  {user ? user.nome + ' ' + user.sobrenome : 'Usuário'}
                </span>
                <p>{user ? user.username : 'Usuário'}</p>
              </div>
              <div className="circle">
                <FontAwesomeIcon icon={faUser} />
                <ButtonOptions onClick={() => setOpened(!opened)}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </ButtonOptions>
              </div>
              <div
                style={{ visibility: opened ? 'visible' : 'hidden' }}
                className="panel-options"
              >
                <ul>
                  <li
                    onClick={() => {
                      logout();
                    }}
                  >
                    <span>Logout</span>
                  </li>
                  <li>
                    <span>
                      <a href="https://github.com/lavininhamelo/suflex">
                        Repositorio
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </UserDiv>
        </div>
      </Nav>
    </>
  );
};
