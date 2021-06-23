import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  min-height: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonStyled = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 8px auto 0;
  justify-content: center;
  color: white;
  background: ${props => props.theme.cadetblue};
  border-radius: 4px;
  cursor: pointer;
`;

export const RequiredText = styled.div`
  color: red;
  font-size: 12px;
  text-align: center;
`;

export const InputContainer = styled.div`
  text-align: center;
`;

export const InputStyled = styled.input`
  color: gray;
  padding: 8px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 4px;
`;
