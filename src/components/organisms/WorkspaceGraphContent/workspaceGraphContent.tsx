import React from 'react';
import { IWorkspaceGraphContentProps } from './workspaceGraphContent.types';
import styles from './workspaceGraphContent.module.scss';
import Graph from '../../molecules/Graph/graph';
import { Droppable } from 'react-dragtastic';
import { palletPreviewDraggableType } from '../../molecules/PalletPreview/palletPreview';
import { useDispatch, useSelector } from 'react-redux';
import { EPallets } from '../../../shared/types/pallets.types';
import { setSelectedPallet, toggleModal } from '../../../redux/ui/ui.redux.actions';
import { EModalName } from '../../../redux/ui/ui.redux.types';
import { ReactComponent as GraphInstructionsSvg } from '../../../shared/assets/graph-instructions.svg';
import { RootState } from '../../../redux/redux.types';

const WorkspaceGraphContent: React.FC<IWorkspaceGraphContentProps> = (props) => {

  const {
    displayDragAndDrop,
    parentRef
  } = props;

  const dispatch = useDispatch();
  const generatorDeps = useSelector<RootState, EPallets[]>(state => state.generator.dependencies);
  const isGraphEmpty = !generatorDeps.length;

  const onPalletDrop = (palletName: EPallets) => {
    dispatch(setSelectedPallet(palletName));
    dispatch(toggleModal(EModalName.ADD_NEW_DEPENDENCY, true));
  }

  return (
    <div className={styles.workspaceGraphContent}>
      { displayDragAndDrop &&
        <Droppable
          accepts={palletPreviewDraggableType}
          onDrop={onPalletDrop}
        >
          {dragState =>
            <div
              {...dragState.events}
              className={styles.dragAndDrop}
              style={{
                width: parentRef.current?.clientWidth,
                height: (parentRef.current?.clientHeight)
              }}
            />
          }
        </Droppable>
      }
      { isGraphEmpty ?
        <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
          <GraphInstructionsSvg />
        </div>
        :
        <Graph/>
      }
    </div>
  )
};

export default WorkspaceGraphContent;
