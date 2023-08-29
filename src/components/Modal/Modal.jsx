import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import sprite from '../../images/sprite.svg';
import {
  Overlay,
  Content,
  CloseButton,
  CloseSVG,
} from 'components/Modal/Modal.styled';

const Modal = ({ isOpen, onClose, custom, children }) => {
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
      <Content custom={custom ? true : false}>
        <CloseButton onClick={handleClose}>
          <CloseSVG>
            <use href={sprite + '#icon-x-close'}></use>
          </CloseSVG>
        </CloseButton>
        {children}
      </Content>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
