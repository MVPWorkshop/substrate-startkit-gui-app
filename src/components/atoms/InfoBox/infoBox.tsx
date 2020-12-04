import React from 'react';
import Typography from '../Typography/typography';
import { IInfoBoxProps } from './infoBox.types';
import { EColor } from '../../../shared/types/styles.types';

const InfoBox: React.FC<IInfoBoxProps> = (props) => {
  return (
    <div className={props.className}>
      <Typography
        fontSize={12}
        color={EColor.GRAY_DARK}
        uppercase={true}
        className='font-weight-bold'
        element={'span'}
      >
        {props.head}
      </Typography>
      {
        typeof props.body === 'string' ?
          <Typography color={EColor.WHITE} fontSize={14}>
            {props.body}
          </Typography>
          :
          props.body
      }
    </div>
  )
};

export default InfoBox;
