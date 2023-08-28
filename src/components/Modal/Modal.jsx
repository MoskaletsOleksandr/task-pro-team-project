import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import sprite from '../../images/sprite.svg';
import {
  Overlay,
  Content,
  CloseButton,
} from 'components/Modal/Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    } else {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    }
    return () => {
      document.removeEventListener('keydown', event => {
        if (event.key === 'Escape') {
          onClose();
        }
      });
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
      <Overlay onClick={handleBackdropClick}>
        <Content>
            <CloseButton className="modal-close" onClick={handleClose}>
              <use href={`${sprite}#icon-x-close`} />
            </CloseButton>
            {children}
          </Content>
      </Overlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;