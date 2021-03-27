import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;
`;

export const ImageContainer = styled.div``;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #171717;
  :hover {
    color: #dd219e;
  }
`;

export const CardPrice = styled.p``;

export const Image = styled.img`
  width: 300px;
`;

export const ButtonStyled = styled.button`
  padding: 10px 17px;
  color: red;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.3s ease-out;
  :hover {
    background: #171717;
    transform: scale(1.2);
  }
`;
