import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  border: 1px solid ${props => props.theme.cadetblue};
  background-color: WhiteSmoke;
  color: black;
  font-size: 16px;
  margin: 10px;
  &:hover {
    border: 1px solid black;
    background-color: #ebebeb;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const InfoName = styled.div`
  width: 45%;
  padding: 10px 0;
`;

export const InfoData = styled.div`
  padding: 10px 0;
  color: ${props => props.theme.cadetblue};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
  width: 45%;
`;

export const Button = styled.button`
  border: 0px;
  padding: 4px 0;
  outline: none;
  background-color: ${props => props.theme.cadetblue};
  font-size: 16px;
  margin-top: 5px;
  cursor: pointer;
`;

export const Label = styled.div`
  padding: 8px 0 0 8px;
  width: 8%;
  background-color: ${props => (props.color ? props.color : props.theme.cadetblue)};
  color: white;
  border-bottom-left-radius: 15px;
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
  padding: 4px 6px;
  border-radius: 6px;
`;
