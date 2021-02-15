import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  flex: 1;
  p {
    margin: 8px 0px;
  }
  span {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    background: white;
    width: 150px;
    padding: 8px 8px;
    cursor: pointer;
    border-radius: 50px;
    color: ${PRIMARY_COLOR};
  }
`;
