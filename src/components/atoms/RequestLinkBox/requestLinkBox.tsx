import React from 'react';
import { IRequestLinkBoxProps } from './requestLinkBox.types';
import styles from './requestLinkBox.module.scss'
import Typography from '../Typography/typography';
import { EColor, EFontFamily } from '../../../shared/types/styles.types';

const RequestLinkBox: React.FC<IRequestLinkBoxProps> = (props) => {

  const {
    link,
    requestName,
    shortDescription
  } = props;

  return (
    <a href={link} target='_blank' rel="noopener noreferrer">
      <div className={styles.requestLinkBox}>
        <Typography
          fontFamily={EFontFamily.POPPINS}
          className='fw-600'
          color={EColor.PURPLE_GRADIENT}
        >
          {requestName}
        </Typography>
        <Typography
          fontSize={13}
          element={'span'}
          color={EColor.WHITE}
        >
          {shortDescription}
        </Typography>
      </div>
    </a>
  )
}

export default RequestLinkBox;
