import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 60%;
`;

export const WelcomeText = styled.div`
  font-size: 20px;
  padding: 16px;
  ${tabletUp`
    font-size: 40px;
  `};
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.cadetblue};
  margin: 32px 0 16px 0;
  text-decoration: none;
  font-size: 20px;
  ${tabletUp`
    font-size: 32px;
    margin: 32px 0;
  `};
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 80px;
  right: 60px;
  display: none;
  ${tabletUp`
    display: block;
  `};
`;

export const LoadingMessage = styled.h3`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.cadetblue};
`;

export const Info = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;

export const InfoData = styled.div`
  width: 100%;
  padding: 16px 0;
  ${tabletUp`
    padding: 16px;
  `};
`;

export const ProfileData = styled.div`
  display: flex;
  font-size: 12px;
  padding: 8px;
  ${tabletUp`
    font-size: 20px;
  `};
`;

export const Text = styled.div`
  color: black;
  width: 45%;
`;

export const Data = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  width: 55%;
`;

export const ImageContainer = styled.div`
  align-self: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-self: center;
  padding: 0 24px;
`;

export const Button = styled.button`
  border: 0;
  padding: 6px 0;
  outline: none;
  background-color: ${props => props.theme.cadetblue};
  font-size: 18px;
  margin-top: 24px;
  cursor: pointer;
  width: 80%;
  font-weight: 600;
  border-radius: 4px;
  ${tabletUp`
    width: 40%;
  `};
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
  padding: 4px 6px;
  border-radius: 6px;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  ${tabletUp`
    flex-direction: row;
  `};
`;
