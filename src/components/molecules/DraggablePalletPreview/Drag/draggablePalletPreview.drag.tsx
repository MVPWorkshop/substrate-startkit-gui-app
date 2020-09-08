import React from 'react'
import { IDraggablePalletPreviewDragProps } from './draggablePalletPreview.drag.types';
import PalletPreview, { palletPreviewHeight, palletPreviewWidth } from '../../PalletPreview/palletPreview';
import { DragComponent } from 'react-dragtastic';

const styles: React.CSSProperties = {
  transform: 'rotate(7deg)',
  WebkitTransform: 'rotate(7deg)',
  opacity: 0.9,
  width: `${palletPreviewWidth}px`,
  position: 'fixed',
  pointerEvents: 'none'
}

const DraggablePalletPreviewDrag: React.FC<IDraggablePalletPreviewDragProps> = (props) => {

  return (
    <DragComponent for={'drag-' + props.pallet.name}>
      {({ x, y }) => (
        <div
          style={{
            ...styles,
            left: x - (palletPreviewWidth / 2),
            top: y - (palletPreviewHeight / 2)
          }}
        >
          <PalletPreview pallet={props.pallet}/>
        </div>
      )}
    </DragComponent>
  )
}

export default DraggablePalletPreviewDrag;
