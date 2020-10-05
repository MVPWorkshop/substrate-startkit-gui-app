import React, { Fragment, useState } from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import Loader from '../../../atoms/Loader/loader';
import Typography from '../../../atoms/Typography/typography';
import styles from './modalAddNewDependency.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/redux.types';
import { IPalletResponse } from '../../../../services/pallets/palletsService.types';
import { getCurrentlySelectedPallet } from '../../../../redux/pallets/pallets.redux.selectors';
import DependencyList from '../../../atoms/DependencyList/dependencyList';
import Button from '../../../atoms/Button/button';
import { EColor } from '../../../../shared/types/styles.types';
import { setSelectedPallet, toggleModal } from '../../../../redux/ui/ui.redux.actions';
import { addPalletToGenerator } from '../../../../redux/generator/generator.redux.actions';
import SuccessIcon from '../../../atoms/SuccessIcon/successIcon';

enum EAddNewDependencyModalSteps {
  DEPENDENCY_CHECK = 'DEPENDENCY_CHECK',
  DEPENDENCY_DETAILS = 'DEPENDENCY_DETAILS',
  CONFIRMATION = 'CONFIRMATION',
  SUCCESS = 'SUCCESS'
}

const ModalAddNewDependency = () => {

  const pallet = useSelector<RootState, IPalletResponse | undefined>(getCurrentlySelectedPallet);
  const [currentStep, setCurrentStep] = useState<EAddNewDependencyModalSteps>(EAddNewDependencyModalSteps.DEPENDENCY_CHECK);

  const dispatch = useDispatch();

  const renderContentByStep = () => {
    switch (currentStep) {
      case EAddNewDependencyModalSteps.DEPENDENCY_CHECK: {
        return (
          <Fragment>
            <Loader className='mb-9'/>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Checking dependencies...
            </Typography>
            <Typography textAlign={'center'} className='fw-400' fontSize={14}>
              Making sure your blockchain doesn't break!
            </Typography>
          </Fragment>
        )
      }
      case EAddNewDependencyModalSteps.DEPENDENCY_DETAILS: {
        return (
          <Fragment>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Dependencies found
            </Typography>
            <div className='d-flex justify-content-between mb-10'>
              <DependencyList
                dependencies={[pallet!.name]}
                label={'Selected'}
              />
              { pallet!.dependencies.using.length ?
                <DependencyList
                  className={'ml-9'}
                  dependencies={pallet!.dependencies.using}
                  label={'Using'}
                /> : null
              }
            </div>
            <Typography textAlign={'center'} fontSize={14} color={EColor.GRAY_LIGHTER}>
              In order for your blockchain to compile all pallets must be added.
            </Typography>
            <Button
              key='btn-add-all-pallets'
              theme={'outline-primary'}
              onClick={() => setCurrentStep(EAddNewDependencyModalSteps.CONFIRMATION)}
            >
              <Typography element={'span'} fontSize={14}>
                Add all pallets
              </Typography>
            </Button>
          </Fragment>
        )
      }
      case EAddNewDependencyModalSteps.CONFIRMATION: {
        return (
          <Fragment>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Please confirm
            </Typography>
            <Typography
              className={'mb-14'}
              textAlign={'center'}
              fontSize={14}
              color={EColor.GRAY_LIGHTER}
            >
              Are you sure you want to continue?
            </Typography>
            <Button
              key={'confirm'}
              theme={'outline-primary'}
              className={'mb-2'}
              onClick={addPallet}
            >
              <Typography element={'span'} fontSize={14}>
                Confirm
              </Typography>
            </Button>
            <Button
              key={'cancel'}
              theme={'flat'}
              onClick={closeModal}
            >
              <Typography element={'span'} fontSize={14}>
                Cancel
              </Typography>
            </Button>
          </Fragment>
        )
      }
      case EAddNewDependencyModalSteps.SUCCESS: {
        return (
          <Fragment>
            <SuccessIcon className={'mb-6'}/>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Pallet added
            </Typography>
            <Typography
              textAlign={'center'}
              fontSize={14}
              color={EColor.GRAY_LIGHTER}
            >
              <b>{pallet?.name}</b> has been added to your blockchain.
            </Typography>
            <Button
              theme={'outline-primary'}
              onClick={closeModal}
            >
              OK
            </Button>
          </Fragment>
        )
      }
    }
  }

  if (!pallet) {
    return null;
  }

  const onModalOpen = () => {
    setCurrentStep(EAddNewDependencyModalSteps.DEPENDENCY_CHECK);
    setTimeout(() => {
      setCurrentStep(EAddNewDependencyModalSteps.DEPENDENCY_DETAILS);
    }, 2000);
  }

  const onHide = () => {
    dispatch(setSelectedPallet(undefined));
  }

  const closeModal = () => {
    dispatch(toggleModal(EModalName.ADD_NEW_DEPENDENCY, false));
    onHide()
  }

  const addPallet = () => {
    dispatch(addPalletToGenerator(pallet.name));
    setCurrentStep(EAddNewDependencyModalSteps.SUCCESS);
  }

  return (
    <Modal
      name={EModalName.ADD_NEW_DEPENDENCY}
      dialogClassName={styles.modalAddNewDependency}
      onOpen={onModalOpen}
      onHide={onHide}
      disableHide={currentStep === EAddNewDependencyModalSteps.DEPENDENCY_CHECK}
    >
      <Modal.Body className={styles.body}>
        {renderContentByStep()}
      </Modal.Body>
    </Modal>
  )
}

export default ModalAddNewDependency;
