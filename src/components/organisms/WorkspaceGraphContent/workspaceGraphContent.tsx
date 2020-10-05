import React from 'react';
import { IWorkspaceGraphContentProps } from './workspaceGraphContent.types';
import styles from './workspaceGraphContent.module.scss';
import Graph from '../../molecules/Graph/graph';
import { Droppable } from 'react-dragtastic';
import { palletPreviewDraggableType } from '../../molecules/PalletPreview/palletPreview';
import { useDispatch } from 'react-redux';
import { EPallets } from '../../../shared/types/pallets.types';
import { setSelectedPallet, toggleModal } from '../../../redux/ui/ui.redux.actions';
import { EModalName } from '../../../redux/ui/ui.redux.types';
import { ReactComponent as GraphInstructionsSvg } from '../../../shared/assets/graph-instructions.svg';

const WorkspaceGraphContent: React.FC<IWorkspaceGraphContentProps> = (props) => {

  const {
    displayDragAndDrop,
    parentRef
  } = props;

  const dispatch = useDispatch();

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
            >
              <GraphInstructionsSvg />
            </div>
          }
        </Droppable>
      }
      <Graph />
    </div>
  )
};

export default WorkspaceGraphContent;
