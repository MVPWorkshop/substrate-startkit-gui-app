import React, { Fragment } from 'react';
import Modal from '../../../atoms/Modal/modal';
import { EModalName } from '../../../../redux/ui/ui.redux.types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/redux.types';
import { IPalletResponse } from '../../../../services/pallets/palletsService.types';
import { togglePalletDetailsModal } from '../../../../redux/ui/ui.redux.actions';
import Button from '../../../atoms/Button/button';
import Typography from '../../../atoms/Typography/typography';
import { EColor, EFontFamily } from '../../../../shared/types/styles.types';
import { ReactComponent as IconClose } from '../../../../shared/assets/icon_close.svg';
import Tab from '../../../atoms/Tab/tab';
import Tabs from '../../../molecules/Tabs/tabs';
import TabPanel from '../../../atoms/TabPanel/tabPanel';
import InfoBox from '../../../atoms/InfoBox/infoBox';
import {
  commonAuthorsLabels,
  palletCategoryLabels,
  substrateVersionLabels
} from '../../../../shared/constants/pallet.constants';
import { byteToKb } from '../../../../shared/utils/common.util';
import DependencyList from '../../../atoms/DependencyList/dependencyList';
import moment from 'moment';
import styles from './modalPalletDetails.module.scss';
import commonModalStyles from '../modalCommon.module.scss';
import { classes } from '../../../../shared/utils/styles.util';
import { addPalletToGenerator } from '../../../../redux/generator/generator.redux.actions';

enum ETabs {
  OVERVIEW = 'OVERVIEW',
  DESCRIPTION = 'DESCRIPTION',
  DEPENDENCIES = 'DEPENDENCIES',
  COMMENTS = 'COMMENTS',
}

const ModalPalletDetails: React.FC = () => {

  const dispatch = useDispatch();

  const pallet = useSelector<RootState, IPalletResponse | undefined>(state => {

    const selectedPallet = state.ui.selectedPallet;

    if (selectedPallet) {
      return state.pallets[selectedPallet];
    } else {
      return undefined;
    }
  });

  if (!pallet) {
    return null;
  }

  const onHide = () => {
    dispatch(togglePalletDetailsModal(pallet.name, false));
  }

  const addPalletClick = () => {
    onHide();
    dispatch(addPalletToGenerator(pallet.name));
  }

  const addPalletButton = () => {
    return (
      <div className='d-flex justify-content-end'>
        <Button theme={'outline-primary'} onClick={addPalletClick}>
          <Typography fontSize={14} element={'span'}>
            Add pallet
          </Typography>
        </Button>
      </div>
    )
  }

  const overviewTab = () => {
    return (
      <TabPanel name={ETabs.OVERVIEW}>
        <div className={commonModalStyles.tabPanel}>
          <div className='d-flex flex-wrap justify-content-between'>
            <div>
              <InfoBox head='Package' body={pallet.packageName}/>
              <InfoBox
                head='Categories'
                body={pallet.categories.map(category => (
                  <Typography className='mb-0' fontSize={14} key={category}>
                    {palletCategoryLabels[category]}
                  </Typography>
                ))}
              />
              <InfoBox
                head='Stats'
                body={
                  <Fragment>
                    <Typography className='mb-0' fontSize={14}>
                      {moment(pallet.updated).fromNow()}
                    </Typography>
                    <Typography className='mb-0' fontSize={14}>
                      {byteToKb(pallet.size)}kB
                    </Typography>
                    <Typography className='mb-0' fontSize={14}>
                      {pallet.downloads}
                    </Typography>
                  </Fragment>
                }
              />
            </div>

            <div>
              <InfoBox head='Version' body={pallet.version} />
              <InfoBox
                head='Authors'
                body={pallet.authors.map(author => (
                  <Typography className='mb-0' fontSize={14} key={author}>
                    {commonAuthorsLabels[author]}
                  </Typography>
                ))}
              />
            </div>

            <div>
              <InfoBox head='Compatibility' body={substrateVersionLabels[pallet.compatibility]} />
              <InfoBox head='License' body={pallet.license} />
            </div>
          </div>
          {addPalletButton()}
        </div>
      </TabPanel>
    )
  }

  const descriptionTab = () => {
     return (
       <TabPanel name={ETabs.DESCRIPTION}>
         <div className={commonModalStyles.tabPanel}>
           <div className={commonModalStyles.descriptionTabText}>
             {pallet.description.split('\n').map((text, i) => (
               <Typography element={'p'} fontSize={14} color={EColor.WHITE} key={i}>
                 {text}
               </Typography>
             ))}
           </div>
           {addPalletButton()}
         </div>
       </TabPanel>
     )
  }

  const dependencyTab = () => {
    return (
      <TabPanel name={ETabs.DEPENDENCIES}>
        <div className={commonModalStyles.tabPanel}>
          <div className='d-flex justify-content-between mb-5'>
            {pallet.dependencies.using.length ?
            <DependencyList
              dependencies={pallet.dependencies.using}
              label='Using'
            /> : null}
            {pallet.dependencies.usedBy.length ?
            <DependencyList
              dependencies={pallet.dependencies.usedBy}
              label={'Used by'}
            /> : null}

            {
              !pallet.dependencies.usedBy.length && !pallet.dependencies.using.length ?
                <Typography
                  className='flex-grow-1 d-flex justify-content-center mb-0'
                  color={EColor.GRAY_DARK}
                  fontSize={18}
                >
                  This pallet has no dependencies.
                </Typography> : null
            }
          </div>
          {addPalletButton()}
        </div>
      </TabPanel>
    )
  }

  return (
    <Modal
      name={EModalName.PALLET_DETAILS}
      onHide={onHide}
      className={classes(
        styles.modalPalletDetails,
        commonModalStyles.detailsModal
      )}
    >
      <Modal.Title className={commonModalStyles.title}>
        <div className='d-flex align-items-center justify-content-between'>
          <Typography element='span' fontFamily={EFontFamily.POPPINS} fontSize={24}>
            {pallet.name}
          </Typography>
          <button className={commonModalStyles.closeBtn} onClick={onHide}>
            <IconClose />
          </button>
        </div>
        <Typography fontSize={14} className='mt-3' color={EColor.GRAY_LIGHTER}>
          {pallet.shortDescription}
        </Typography>
      </Modal.Title>
      <Modal.Body className={commonModalStyles.body}>
        <Tabs defaultSelectedTab={ETabs.OVERVIEW}>
          <Tab name={ETabs.OVERVIEW} label={'Overview'}/>
          <Tab name={ETabs.DESCRIPTION} label={'Description'}/>
          <Tab name={ETabs.DEPENDENCIES} label={'Dependencies'}/>
          {/*<Tab name={ETabs.COMMENTS} label={'Comments'}/>*/}
          
          {overviewTab()}
          {descriptionTab()}
          {dependencyTab()}
        </Tabs>
      </Modal.Body>
    </Modal>
  )
}

export default ModalPalletDetails;
