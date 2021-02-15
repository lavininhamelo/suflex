import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${PRIMARY_COLOR};
  min-height: 80px;
  margin-top: 50px;
  color: white;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;
