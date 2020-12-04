import React, { Fragment, useState } from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import { ReactComponent as WarningIcon } from '../../../../shared/assets/warning_icon.svg';
import styles from './modalRemoveDependency.module.scss';
import Typography from '../../../atoms/Typography/typography';
import { EColor } from '../../../../shared/types/styles.types';
import Button from '../../../atoms/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPallet, toggleModal } from '../../../../redux/ui/ui.redux.actions';
import { RootState } from '../../../../redux/redux.types';
import { IPalletResponse } from '../../../../services/pallets/palletsService.types';
import { getCurrentlySelectedPallet } from '../../../../redux/pallets/pallets.redux.selectors';
import { removePalletFromGenerator } from '../../../../redux/generator/generator.redux.actions';
import DependencyList from '../../../atoms/DependencyList/dependencyList';
import { EPallets } from '../../../../shared/types/pallets.types';
import { recursivelyFindPalletDependencies } from '../../../../shared/utils/generator.util';
import { keepDuplicates } from '../../../../shared/utils/common.util';
import { ETypographyVariant } from '../../../atoms/Typography/typography.types';

enum ERemoveDependencyModalSteps {
  DEPENDENCY_DETAILS = 'DEPENDENCY_DETAILS',
  CONFIRMATION = 'CONFIRMATION'
}

const ModalRemoveDependency: React.FC = () => {

  const generatorDeps = useSelector<RootState, EPallets[]>(state => state.generator.dependencies);
  const pallets = useSelector<RootState, RootState['pallets']>(state => state.pallets);
  const pallet = useSelector<RootState, IPalletResponse | undefined>(getCurrentlySelectedPallet);
  const [currentStep, setCurrentStep] = useState<ERemoveDependencyModalSteps>(ERemoveDependencyModalSteps.CONFIRMATION);
  const [palletDeps, setPalletDeps] = useState<EPallets[]>([]);

  const dispatch = useDispatch();

  const renderContentByStep = () => {
    switch (currentStep) {
      case ERemoveDependencyModalSteps.DEPENDENCY_DETAILS: {
        return (
          <Fragment>
            <WarningIcon />
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Please confirm
            </Typography>
            <Typography
              className={'mb-14'}
              textAlign={'center'}
              fontSize={14}
              color={EColor.GRAY_LIGHTER}
            >
              Please check and resolve dependencies before removing this pallet.
            </Typography>
            <div className='d-flex justify-content-between mb-14'>
              <DependencyList
                dependencies={[pallet!.name]}
                label={'SELECTED'}
                className={'mr-9'}
              />
              { palletDeps.length ?
                <DependencyList
                  dependencies={palletDeps}
                  label={'USED BY'}
                /> : null
              }
            </div>
            <Button
              theme={'secondary'}
              onClick={() => setCurrentStep(ERemoveDependencyModalSteps.CONFIRMATION)}
              className={'mb-4'}
            >
              <Typography element={'span'} fontSize={14}>
                Remove all
              </Typography>
            </Button>
            <Button
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
      case ERemoveDependencyModalSteps.CONFIRMATION: {
        return (
          <Fragment>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Please confirm
            </Typography>
            <Typography
              className={'mb-14'}
              textAlign={'center'}
              variant={ETypographyVariant.BODY}
            >
              Are you sure you want to continue?
            </Typography>
            <Button
              key={'confirm'}
              theme={'outline-primary'}
              className={'mb-2'}
              onClick={removePallet}
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
    }
  }

  if (!pallet) {
    return null;
  }

  const onHide = () => {
    dispatch(setSelectedPallet(undefined));
  }

  const closeModal = () => {
    dispatch(toggleModal(EModalName.REMOVE_DEPENDENCY, false));
    onHide()
  }

  const removePallet = () => {
    dispatch(removePalletFromGenerator(pallet.name));
    closeModal();
  }

  const onModalOpen = () => {
    const depsWhichUseThePallet = recursivelyFindPalletDependencies({
      pallets,
      palletName: pallet.name,
      dependencyType: 'usedBy'
    });

    const depsToRemove = keepDuplicates(depsWhichUseThePallet, generatorDeps);

    setPalletDeps(depsToRemove)

    if (depsToRemove.length) {
      setCurrentStep(ERemoveDependencyModalSteps.DEPENDENCY_DETAILS);
    } else {
      setCurrentStep(ERemoveDependencyModalSteps.CONFIRMATION);
    }
  }

  return (
    <Modal
      name={EModalName.REMOVE_DEPENDENCY}
      dialogClassName={styles.modalRemoveDependency}
      onOpen={onModalOpen}
      onHide={onHide}
    >
      <Modal.Body className={styles.body}>
        {renderContentByStep()}
      </Modal.Body>
    </Modal>
  )
};

export default ModalRemoveDependency;
