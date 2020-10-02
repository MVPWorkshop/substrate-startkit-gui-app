import React from 'react';
import { ReactComponent as WelcomeIllustration } from '../../../shared/assets/welcome_screen_illustration.svg';
import Typography from '../../atoms/Typography/typography';
import { ETypographyVariant } from '../../atoms/Typography/typography.types';
import { EColor, EFontFamily } from '../../../shared/types/styles.types';
import Button from '../../atoms/Button/button';
import styles from './workspaceWelcomeContent.module.scss';
import { IWorkspaceWelcomeContentProps } from './workspaceWelcomeContent.types';

const WorkspaceWelcomeContent: React.FC<IWorkspaceWelcomeContentProps> = (props) => {
  return (
    <div className={styles.workspaceWelcomeContent}>
      <WelcomeIllustration className={styles.welcomeImg}/>
      <div className='mb-4'>
        <Typography variant={ETypographyVariant.TITLE}>
          Build your blockchain
        </Typography>
      </div>
      <div className='mb-8'>
        <Typography
          color={EColor.GRAY_DARK}
          fontFamily={EFontFamily.POPPINS}
          fontSize={18}
          className='text-center'
        >
          Substrate StarterKit allows you to create a blockchain based on custom logic simply by drag and dropping pallets.
          Created blockchain codebase will be deployed to your Github account.
        </Typography>
      </div>
      <Button
        theme={'outline-primary'}
        onClick={props.onCreateBtnClick}
        className={styles.createNewBlockchainBtn}
      >
        Create New Blockchain
      </Button>
    </div>
  )
}

export default WorkspaceWelcomeContent;
