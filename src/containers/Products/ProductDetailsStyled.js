import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1300px;
  padding-top: 24px;
  display: flex;
`;

export const ImageContainer = styled.div`
  margin: 1rem;
  flex: 0.6;
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
`;

export const InfoContainer = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const Price = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border: none;
  }
`;

export const Description = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border: none;
  }
`;

export const CartContainer = styled.div`
  width: 250px;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
`;

export const CartPrice = styled.p`
  padding: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border: none;
  }
`;

export const CartStatus = styled.p`
  padding: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border: none;
  }
`;

export const StyledSelect = styled.select`
  padding: 10px 16px;
`;

export const StyledButton = styled.button`
  grid-column: 1/-1;
  width: 100%;
  padding: 10px 16px;
  background: #171717;
  color: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  border-radius: 5px;
`;

export const SelectContainer = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  :last-child {
    border: none;
  }
`;

export const ButtonContainer = styled.p`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  :last-child {
    border: none;
  }
`;
