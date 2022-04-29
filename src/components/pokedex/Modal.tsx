import React from 'react'
import { ContainerModal } from '../../styles'
import { ModalProps } from '../../interfaces/components';

export const Modal = ({show, children}:ModalProps) => {
    return (
        <ContainerModal show={show}>
            {children}
        </ContainerModal>
    )
}
