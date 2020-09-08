import React  from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import { classes } from '../../../../shared/utils/styles.util';
import commonModalStyles from '../modalCommon.module.scss';
import styles from './modalTemplateDetails.module.scss';
import Typography from '../../../atoms/Typography/typography';
import { EColor, EFontFamily } from '../../../../shared/types/styles.types';
import { ReactComponent as IconClose } from '../../../../shared/assets/icon_close.svg';
import { toggleTemplateDetailsModal } from '../../../../redux/ui/ui.redux.actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/redux.types';
import { ITemplateResponse } from '../../../../services/templates/templatesService.types';
import Tabs from '../../../molecules/Tabs/tabs';
import Tab from '../../../atoms/Tab/tab';
import TabPanel from '../../../atoms/TabPanel/tabPanel';
import DependencyList from '../../../atoms/DependencyList/dependencyList';
import Button from '../../../atoms/Button/button';

enum ETabs {
  DESCRIPTION = 'DESCRIPTION',
  DEPENDENCIES = 'DEPENDENCIES'
}

const ModalTemplateDetails: React.FC = () => {

  const dispatch = useDispatch();

  const template = useSelector<RootState, ITemplateResponse | undefined>(state => {

    const selectedTemplate = state.ui.selectedTemplate;

    if (selectedTemplate) {
      return state.templates[selectedTemplate];
    } else {
      return undefined;
    }
  });

  if (!template) {
    return null;
  }

  const onHide = () => {
    dispatch(toggleTemplateDetailsModal(template.id, false));
  }

  const createBlockchainButton = () => {
    return (
      <div className='d-flex justify-content-end'>
        <Button theme={'outline-primary'}>
          <Typography fontSize={14} element={'span'}>
            Create blockchain
          </Typography>
        </Button>
      </div>
    )
  }

  const descriptionTab = () => {
    return (
      <TabPanel name={ETabs.DESCRIPTION}>
        <div className={commonModalStyles.tabPanel}>
          <div className={commonModalStyles.descriptionTabText}>
            {template.description.split('\n').map((text, i) => (
              <Typography element={'p'} fontSize={14} color={EColor.WHITE} key={i}>
                {text}
              </Typography>
            ))}
          </div>
          {createBlockchainButton()}
        </div>
      </TabPanel>
    )
  }

  const dependencyTab = () => {
    return (
      <TabPanel name={ETabs.DEPENDENCIES}>
        <div className={classes(
          commonModalStyles.tabPanel,
          'd-flex mb-5'
        )}>
          <DependencyList
            dependencies={template.dependencies}
            label='Pallets used'
          />
        </div>
        {createBlockchainButton()}
      </TabPanel>
    )
  }

  return (
    <Modal
      name={EModalName.TEMPLATE_DETAILS}
      onHide={onHide}
      className={classes(
        styles.modalTemplateDetails,
        commonModalStyles.detailsModal
      )}
    >
      <Modal.Title className={commonModalStyles.title}>
        <div className='d-flex align-items-center justify-content-between'>
          <Typography element='span' fontFamily={EFontFamily.POPPINS} fontSize={24}>
            {template.name}
          </Typography>
          <button className={commonModalStyles.closeBtn} onClick={onHide}>
            <IconClose />
          </button>
        </div>
        <Typography fontSize={14} className='mt-3' color={EColor.GRAY_LIGHTER}>
          <span className='font-weight-bold'>Author:</span> {template.author.username}
        </Typography>
      </Modal.Title>
      <Modal.Body className={commonModalStyles.body}>
        <Tabs defaultSelectedTab={ETabs.DESCRIPTION}>
          <Tab name={ETabs.DESCRIPTION} label={'Description'}/>
          <Tab name={ETabs.DEPENDENCIES} label={'Dependencies'}/>

          {descriptionTab()}
          {dependencyTab()}
        </Tabs>
      </Modal.Body>
    </Modal>
  )
};

export default ModalTemplateDetails;
