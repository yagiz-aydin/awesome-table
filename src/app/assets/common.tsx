import styled from "styled-components";

interface ButtonProps {
    hoverColor?: string; 
}

export const Button = styled.button`
  border: none;
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    background: ${({hoverColor} : ButtonProps) => hoverColor};
  }
  img{
        height: 18px;
        width: 18px;
      }
  @media (max-width: 767px) {
      padding: 0;
      img{
        height: 12px;
        width: 12px;
      }
  }
`;
