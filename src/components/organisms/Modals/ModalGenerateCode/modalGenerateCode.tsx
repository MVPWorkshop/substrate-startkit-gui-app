import React, { Fragment, useState } from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import Typography from '../../../atoms/Typography/typography';
import styles from './modalGenerateCode.module.scss';
import { ReactComponent as GithubIcon } from '../../../../shared/assets/github_icon.svg';
import { EColor } from '../../../../shared/types/styles.types';
import Button from '../../../atoms/Button/button';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../../../redux/ui/ui.redux.actions';
import SuccessIcon from '../../../atoms/SuccessIcon/successIcon';
import { ETypographyVariant } from '../../../atoms/Typography/typography.types';
import { resetGenerator } from '../../../../redux/generator/generator.redux.actions';
import { ReactComponent as WarningIcon } from '../../../../shared/assets/warning_icon.svg';

enum EGenerateCodeModalSteps {
  DEPLOY_TYPE = 'DEPLOY_TYPE',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

const ModalGenerateCode: React.FC = () => {

  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState<EGenerateCodeModalSteps>(EGenerateCodeModalSteps.DEPLOY_TYPE);

  const renderContentByStep = () => {
    switch (currentStep) {
      case EGenerateCodeModalSteps.DEPLOY_TYPE: {
        return (
          <Fragment>
            <Typography
              textAlign={'center'}
              fontSize={24}
              className='fw-600'
            >
              Codebase
            </Typography>
            {/*<Typography*/}
            {/*  variant={ETypographyVariant.BODY}*/}
            {/*  textAlign={'center'}*/}
            {/*>*/}
            {/*  Deploy on Github*/}
            {/*</Typography>*/}
            <div className='mb-8'>
              <button className={styles.deployBtn}>
                <div>
                  <GithubIcon
                    className={'mb-6'}
                  />
                </div>
                <Typography
                  className='fw-900'
                  fontSize={12}
                  textAlign={'center'}
                  color={EColor.WHITE}
                >
                  Deploy on Github
                </Typography>
              </button>
            </div>
            <Button theme={'flat'} onClick={closeModal}>
              <Typography element={'span'} fontSize={14}>
                Cancel
              </Typography>
            </Button>
          </Fragment>
        )
      }
      case EGenerateCodeModalSteps.SUCCESS: {
        return (
          <Fragment>
            <SuccessIcon className={'mb-6'}/>
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              Congratulations!
            </Typography>
            <Typography textAlign={'center'} variant={ETypographyVariant.BODY} className='mb-11'>
              You have successfully created a blockchain
            </Typography>
            <Button
              theme={'outline-primary'}
              onClick={createNewBlockchain}
            >
              Create New Blockchain
            </Button>
          </Fragment>
        )
      }
      case EGenerateCodeModalSteps.ERROR: {
        return (
          <Fragment>
            <WarningIcon />
            <Typography textAlign={'center'} fontSize={24} className='fw-600'>
              An error occurred
            </Typography>
            <Typography
              className={'mb-8'}
              textAlign={'center'}
              variant={ETypographyVariant.BODY}
            >
              An error occurred while trying to deploy the codebase, do you want to try again?
            </Typography>
            <Button
              theme={'outline-primary'}
              onClick={() => setCurrentStep(EGenerateCodeModalSteps.DEPLOY_TYPE)}
            >
              <Typography fontSize={14} element={'span'}>
                Try again
              </Typography>
            </Button>
          </Fragment>
        )
      }
    }
  }

  const closeModal = () => {
    dispatch(toggleModal(EModalName.GENERATE_CODE, false));
  }

  const onOpen = () => {
    setCurrentStep(EGenerateCodeModalSteps.DEPLOY_TYPE);
  }

  const createNewBlockchain = () => {
    dispatch(resetGenerator());
    closeModal();
  }

  return (
    <Modal
      dialogClassName={styles.modalGenerateCode}
      name={EModalName.GENERATE_CODE}
      onOpen={onOpen}
    >
      <Modal.Body className={styles.body}>
        {renderContentByStep()}
      </Modal.Body>
    </Modal>
  )
}

export default ModalGenerateCode;
