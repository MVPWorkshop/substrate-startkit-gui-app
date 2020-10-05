import React, { Fragment } from 'react';
import ModelPalletDetails from './ModalPalletDetails/modalPalletDetails';
import ModalTemplateDetails from './ModalTemplateDetails/modalTemplateDetails';
import ModalAddNewDependency from './ModalAddNewDependency/modalAddNewDependency';

export const Modals = () => {
  return (
    <Fragment>
      <ModelPalletDetails />
      <ModalTemplateDetails />
      <ModalAddNewDependency />
    </Fragment>
  )
}

export default Modals;
