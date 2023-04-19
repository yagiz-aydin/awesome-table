import styled from 'styled-components';
import { IModalContainerProps } from './types';

export const ModalContainer = styled.div`
  display: ${({open}: IModalContainerProps) =>open ? 'block': 'none'}; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 360px;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.16),0 6px 20px 0 rgba(0,0,0,0.16);
  animation-name: animatetop;
  animation-duration: 0.4s;
  
  @keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
  }
`

export const CloseButton = styled.span`
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover{
    color: #5cb85c84;
    text-decoration: none;
    cursor: pointer;
  }
`

export const ModalHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 18px;
  border-bottom: 1px solid black;
`

export const Title = styled.div`
  font-size: 20px;
`