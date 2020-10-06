import React, { Fragment, useState } from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import Typography from '../../../atoms/Typography/typography';
import styles from './modalGenerateCode.module.scss';
import { ReactComponent as GithubIcon } from '../../../../shared/assets/github_icon.svg';
import { EColor } from '../../../../shared/types/styles.types';
import Button from '../../../atoms/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../../redux/ui/ui.redux.actions';
import SuccessIcon from '../../../atoms/SuccessIcon/successIcon';
import { ETypographyVariant } from '../../../atoms/Typography/typography.types';
import { generateCode, resetGenerator } from '../../../../redux/generator/generator.redux.actions';
import { ReactComponent as WarningIcon } from '../../../../shared/assets/warning_icon.svg';
import { RootState } from '../../../../redux/redux.types';
import { createLoadingSelector } from '../../../../redux/loading/loading.redux.reducer';
import { EGeneratorReduxActions } from '../../../../redux/generator/generator.redux.types';
import { BaseError } from '../../../../shared/utils/error.util';

enum EGenerateCodeModalSteps {
  DEPLOY_TYPE = 'DEPLOY_TYPE',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

const ModalGenerateCode: React.FC = () => {

  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState<EGenerateCodeModalSteps>(EGenerateCodeModalSteps.DEPLOY_TYPE);

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [repositoryLink, setRepositoryLink] = useState<string | undefined>();

  const isGeneratingCode = useSelector<RootState, boolean>(
    state => createLoadingSelector([
      EGeneratorReduxActions.GENERATE_CODE
    ])(state)
  )

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
              <Button
                className={styles.deployBtn}
                loading={isGeneratingCode}
                onClick={generateGithubCode}
              >
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
              </Button>
            </div>
            { !isGeneratingCode &&
              <Button theme={'flat'} onClick={closeModal}>
                <Typography element={'span'} fontSize={14}>
                  Cancel
                </Typography>
              </Button>
            }
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
            <Typography textAlign={'center'} variant={ETypographyVariant.BODY}>
              You have successfully created a blockchain
            </Typography>
            { repositoryLink &&
              <Button
                theme={'link'}
                onClick={openGithubRepo}
              >
                Github repo
              </Button>
            }
            <Button
              className='mt-11'
              theme={'outline-primary'}
              onClick={createNewBlockchain}
            >
              Create New Blockchain
            </Button>
            <Button
              className='mt-4'
              theme={'flat'}
              onClick={closeModal}
            >
              <Typography element={'span'} fontSize={14}>
                Close
              </Typography>
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
              { errorMessage &&
                <Fragment>
                  <br />
                  <code> {errorMessage} </code>
                </Fragment>
              }
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
    setRepositoryLink(undefined);
    setErrorMessage(undefined);
  }

  const generateGithubCode = async () => {
    const data = await dispatch(generateCode());

    if (data instanceof Error) {
      if (data instanceof BaseError) {
        setErrorMessage(data.message);
      }

      setCurrentStep(EGenerateCodeModalSteps.ERROR);
    } else {
      setCurrentStep(EGenerateCodeModalSteps.SUCCESS);
      setRepositoryLink(data as unknown as string);
    }
  }

  const openGithubRepo = () => {
    if (repositoryLink) {
      window.open(repositoryLink, '_blank');
    }
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
      disableHide={isGeneratingCode}
    >
      <Modal.Body className={styles.body}>
        {renderContentByStep()}
      </Modal.Body>
    </Modal>
  )
}

export default ModalGenerateCode;
