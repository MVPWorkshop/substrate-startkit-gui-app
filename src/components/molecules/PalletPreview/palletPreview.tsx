import React from 'react';
import { IPalletPreviewProps } from './palletPreview.types';
import styles from './palletPreview.module.scss'
import Typography from '../../atoms/Typography/typography';
import { EFontFamily } from '../../../shared/types/styles.types';
import Button from '../../atoms/Button/button';
import { byteToKb } from '../../../shared/utils/common.util';
import Separator from '../../atoms/Separator/separator';
import { useDispatch } from 'react-redux';
import { togglePalletDetailsModal } from '../../../redux/ui/ui.redux.actions';

export const palletPreviewWidth = 297;
export const palletPreviewHeight = 146;
export const palletPreviewDraggableType = 'palletPreviewDraggable';

const PalletPreview: React.FC<IPalletPreviewProps> = (props) => {

  const {
    name,
    description,
    size,
    downloads
  } = props.pallet;

  const dispatch = useDispatch();

  const openDetailsModal = () => {
    dispatch(togglePalletDetailsModal(name, true));
  }

  return (
    <div className={styles.palletPreview}>
      <Typography
        fontFamily={EFontFamily.POPPINS}
        className='fw-600 mb-4'
      >
        {name}
      </Typography>
      <Typography className={styles.palletDescription}>
        {description}
      </Typography>
      <div className='d-flex justify-content-center'>
        <Typography fontSize={12} className='mr-2' element={'span'}>
          {`${byteToKb(size).toFixed(2)}kB`}
        </Typography>
        <Separator vertical={true} className='mr-2' />
        <Typography fontSize={12} className='mr-2' element={'span'}>
          {`${downloads} Downloads`}
        </Typography>
        <div className='flex-grow-1 d-flex justify-content-end'>
          <Button
            theme={'outline-primary'}
            className={styles.detailsBtn}
            onClick={openDetailsModal}
          >
            <Typography fontSize={12} element={'span'}>
              View Details
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
};

export default PalletPreview;
