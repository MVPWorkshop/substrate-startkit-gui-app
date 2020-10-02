import React from 'react';
import { IWorkspaceGraphContentProps } from './workspaceGraphContent.types';
import styles from './workspaceGraphContent.module.scss';
import Graph from '../../molecules/Graph/graph';
import { Droppable } from 'react-dragtastic';
import { palletPreviewDraggableType } from '../../molecules/PalletPreview/palletPreview';
import { addPalletToGenerator } from '../../../redux/generator/generator.redux.actions';
import { useDispatch } from 'react-redux';
import { EPallets } from '../../../shared/types/pallets.types';

const WorkspaceGraphContent: React.FC<IWorkspaceGraphContentProps> = (props) => {

  const {
    displayDragAndDrop,
    parentRef
  } = props;

  const dispatch = useDispatch();

  const onPalletDrop = (palletName: EPallets) => {
    dispatch(addPalletToGenerator(palletName));
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
      <Graph />
    </div>
  )
};

export default WorkspaceGraphContent;
