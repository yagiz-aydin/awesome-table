import React from 'react';
import { ModalHeadContainer, Title, ModalContainer, ModalContent, CloseButton} from './styled';
import { IModalProps } from './types';

const Modal = ({ title, children, open, closeModal }: IModalProps) => {
    return (
        <ModalContainer open={open}>
            <ModalContent>
            <ModalHeadContainer>
                <Title>{title}</Title>
                <CloseButton onClick={() => closeModal()}>&times;</CloseButton>
            </ModalHeadContainer>
                {open && children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;