import React  from 'react';
import Typography from '../../atoms/Typography/typography';
import { ETypographyVariant } from '../../atoms/Typography/typography.types';
import { ReactComponent as WarningIcon } from '../../../shared/assets/warning_icon.svg';

const GithubLoginErrorPage = () => {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center flex-column p-4'>
      <WarningIcon />
      <Typography variant={ETypographyVariant.TITLE} textAlign={'center'}>
        There was an error while trying to log you in.
      </Typography>
    </div>
  )
}

export default GithubLoginErrorPage;
