import React from 'react';
import './Modal.scss';
import ReactModal from 'react-modal';

type ModalProps = {
  handleClose: React.MouseEventHandler;
  show: boolean;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ handleClose, show, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      preventScroll
      bodyOpenClassName={'ReactModal__Open-Body'}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
