import styled from 'styled-components';
import { StyledButtonProps } from './types';

export const AddButtonStyled = styled.button`
    padding: 8px 16px;
    background: #474747;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        color: #5cb85c84;
    }
`

export const SubmitButtonStyled = styled.button`
  padding: 6px 12px;
  margin-top: 8px;
  background: #474747;
  color: white;
  cursor: pointer;
  &:hover{
    color: #5cb85c84;
  }
  &:disabled{
    background: #474747a9;
    color: white;
  }
`

export const TableButtonStyled = styled.button`
  border: none;
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ hoverColor }: StyledButtonProps) => hoverColor};
  }
  img {
    height: 18px;
    width: 18px;
  }
`;