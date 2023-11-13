import React from 'react';
import './Modal.scss';

type ModalProps = {
  handleClose: React.MouseEventHandler;
  show: boolean;
  children: JSX.Element | JSX.Element[];
  handleOnKeyUp: React.KeyboardEventHandler;
};

const Modal = ({ handleClose, show, children, handleOnKeyUp }: ModalProps) => {
  return (
    <div
      className={
        show
          ? 'modal display-block modal-enter'
          : 'modal display-none modal-leave'
      }
      onKeyUp={handleOnKeyUp}
      aria-modal={true}
      autoFocus
      role="dialog"
    >
      <span onClick={handleClose} className="close" />
      <section className="modal-main">{children}</section>
    </div>
  );
};

export default Modal;
