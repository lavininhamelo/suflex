import styled from 'styled-components';
import BackgroundImage from '../../assets/bg.webp';
export const Container = styled.div`
  background: url('${BackgroundImage}');
  background-color: rgb(238, 68, 77);
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
