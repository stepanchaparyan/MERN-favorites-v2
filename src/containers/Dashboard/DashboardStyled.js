import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
`;

export const ButtonStyled = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 0 auto;
  justify-content: center;
  color: white;
  background: ${props => props.theme.cadetblue};
  border-radius: 4px;
  cursor: pointer;
`;

export const WelcomeText = styled.div`
  color: ${props => props.theme.cadetblue};
  background: white;
  margin: 70px 0 40px;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;
