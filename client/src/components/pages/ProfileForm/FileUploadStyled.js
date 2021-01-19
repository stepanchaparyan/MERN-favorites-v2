import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width: 200px;
`;

export const Input = styled.input`
  border: 0px;
  padding: 8px 10px;
  outline: none;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`;

export const InputHidden = styled.input`
  display: none;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const IconEdit = styled.img`
  width: 20px;
  height: 20px;
  padding: 16px 5px 0 0;
`;

export const LabelEdit = styled.label`
  cursor: pointer;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  color: black;
  font-size: 18px;
  border: 1px black;
  background-color: lightgrey;
  border-radius: 4px;
  padding: 6px 8px 2px 6px;
`;

export const Filename = styled.div`
  font-size: 12px;
  margin: 12px 0;
`;
