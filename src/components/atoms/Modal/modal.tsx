import React from 'react';
import { Modal as BSModal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import { ModalType } from './modal.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { toggleModal } from '../../../redux/ui/ui.redux.actions';

const Modal: ModalType = (props) => {

  const {
    name,
    onHide
  } = props;

  const modalOpen = useSelector<RootState, boolean>(state => {
    return !!state.ui.modals[name];
  })

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModal(name, false));

    if (onHide) {
      onHide();
    }
  }

  return (
    <BSModal
      show={modalOpen}
      onHide={closeModal}
      {...props}
    />
  )
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
