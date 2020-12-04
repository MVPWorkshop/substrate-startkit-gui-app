import React from 'react'
import styles from './templatePreview.module.scss';
import Typography from '../../atoms/Typography/typography';
import { EFontFamily } from '../../../shared/types/styles.types';
import { ITemplatePreviewProps } from './templatePreview.types';
import Button from '../../atoms/Button/button';
import { useDispatch } from 'react-redux';
import { toggleTemplateDetailsModal } from '../../../redux/ui/ui.redux.actions';
import { addTemplateToGenerator } from '../../../redux/generator/generator.redux.actions';

const TemplatePreview: React.FC<ITemplatePreviewProps> = (props) => {

  const {
    id,
    description,
    name,
  } = props.template;

  const dispatch = useDispatch();

  const openDetailsModal = () => {
    dispatch(toggleTemplateDetailsModal(id, true))
  }

  const onAddTemplateClick = () => {
    dispatch(addTemplateToGenerator(id))
    props.onCreateBlockchainClick();
  }

  return (
    <div className={styles.templatePreview}>
      <Typography
        fontFamily={EFontFamily.POPPINS}
        className='fw-600 mb-4'
      >
        {name}
      </Typography>
      <Typography className={styles.templateDescription}>
        {description}
      </Typography>
      <div className='d-flex align-items-center'>
        <Button
          theme={'outline-primary'}
          onClick={onAddTemplateClick}
        >
          <span className='fs-12'>Create blockchain</span>
        </Button>
        <div className='flex-grow-1 d-flex justify-content-end'>
          <Button
            theme={'outline-primary'}
            className={styles.detailsBtn}
            onClick={openDetailsModal}
          >
            <span className='fs-12'>View details</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TemplatePreview;
