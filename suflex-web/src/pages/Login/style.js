import styled from 'styled-components';
import { Link as To } from 'react-router-dom';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -120px;
  padding: 20px;
  margin: 48px 0px;

  .img {
    background: ${PRIMARY_COLOR};
    padding: 5px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${SECONDARY_COLOR};
    margin-bottom: 16px;
  }

  p {
    width: 90%;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #9a9393;
    margin-bottom: 32px;
    min-width: 300px;
    max-width: 360px;
  }

  form {
    min-width: 300px;
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    Button {
      margin-bottom: 18px;
    }

    span {
      font-size: 13px;
      color: #999;
    }
  }
`;
export const Link = styled(To)`
  color: ${PRIMARY_COLOR};
  &:hover {
    color: ${SECONDARY_COLOR};
  }
`;
