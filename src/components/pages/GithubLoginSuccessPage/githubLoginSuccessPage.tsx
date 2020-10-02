import React from 'react';
import Typography from '../../atoms/Typography/typography';
import { ETypographyVariant } from '../../atoms/Typography/typography.types';
import SuccessIcon from '../../atoms/SuccessIcon/successIcon';

const GithubLoginSuccessPage = () => {
  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-center flex-column'>
      <SuccessIcon />
      <Typography variant={ETypographyVariant.TITLE}>
        Login successful!
      </Typography>
    </div>
  )
}

export default GithubLoginSuccessPage;
