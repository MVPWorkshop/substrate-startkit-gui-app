import ModelPalletDetails from './ModalPalletDetails/modalPalletDetails';
import React, { Fragment } from 'react';
import ModalTemplateDetails from './ModalTemplateDetails/modalTemplateDetails';

export const Modals = () => {
  return (
    <Fragment>
      <ModelPalletDetails />
      <ModalTemplateDetails />
    </Fragment>
  )
}

export default Modals;
