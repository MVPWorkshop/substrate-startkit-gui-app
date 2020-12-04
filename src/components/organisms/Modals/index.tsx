import React, { Fragment } from 'react';
import ModelPalletDetails from './ModalPalletDetails/modalPalletDetails';
import ModalTemplateDetails from './ModalTemplateDetails/modalTemplateDetails';
import ModalAddNewDependency from './ModalAddNewDependency/modalAddNewDependency';
import ModalRemoveDependency from './ModalRemoveDependency/modalRemoveDependency';
import ModalGenerateCode from './ModalGenerateCode/modalGenerateCode';

export const Modals = () => {
  return (
    <Fragment>
      <ModelPalletDetails />
      <ModalTemplateDetails />
      <ModalAddNewDependency />
      <ModalRemoveDependency />
      <ModalGenerateCode />
    </Fragment>
  )
}

export default Modals;
