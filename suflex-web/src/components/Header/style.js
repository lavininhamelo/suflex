import styled from 'styled-components';
import { PRIMARY_COLOR, TEXT_COLOR_PRIMARY } from '../../styles/GlobalStyles';
export const Nav = styled.nav`
  > * {
    font-family: 'Roboto';
    user-select: none;
  }
  color: ${TEXT_COLOR_PRIMARY};
  z-index: 5;
  display: flex;
  padding: 0px 24px;
  align-items: center;
  width: 100%;
  height: 80px;
  background: ${PRIMARY_COLOR};
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: column;
    span {
      font-weight: bold;
    }
  }
  a {
    text-decoration: none;
  }
`;

export const ButtonOptions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  color: ${PRIMARY_COLOR};
  border: 0.1px solid ${PRIMARY_COLOR};
  bottom: 2px;
  right: 0;
  background-color: white;
  > * {
    font-size: 10px;
    width: 10px;
    height: 14px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 52px;
  div.group {
    display: flex;
    align-items: center;
    font-size: 10pt;
  }
  div.group span {
    color: black;
    font-weight: bold;
    color: #fff;
  }

  div.circle {
    display: flex;
    font-size: 18pt;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #eeeeee;
    border-radius: 50%;
    margin-left: 10px;
    color: #ccc;
  }

  div.panel-options {
    position: absolute;
    display: flex;
    justify-content: space-between;
    color: ${PRIMARY_COLOR};
    width: 100%;
    height: auto;
    top: 100%;
    border: 0.5px solid #eee;
    background-color: #fff;
  }
  div.panel-options ul li {
    width: 100%;
    color: ${PRIMARY_COLOR};
    display: flex;
    padding: 4px;
    border: 1px solid #eee;
    justify-content: space-between;
    padding: 10px;
    list-style: none;
  }

  div.panel-options ul {
    border-radius: 10px;
    color: ${PRIMARY_COLOR};
    width: 100%;
  }
  div.panel-options ul li span {
    color: ${PRIMARY_COLOR};
  }

  div.panel-options a {
    text-decoration: none;
    color: ${PRIMARY_COLOR};
  }
`;
