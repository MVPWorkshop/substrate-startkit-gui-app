import React  from 'react'
import PalletPreview, { palletPreviewDraggableType, palletPreviewWidth } from '../../PalletPreview/palletPreview';
import { IDraggablePalletPreviewIdleProps } from './draggablePalletPreview.idle.types';
import { Draggable } from 'react-dragtastic';

const DraggablePalletPreviewIdle: React.FC<IDraggablePalletPreviewIdleProps> = (props) => {

  return (
    <Draggable
      type={palletPreviewDraggableType}
      id={'drag-' + props.pallet.name}
      data={props.pallet.name}
    >
      {({isActive, events}) => (
        <div
          style={{
            opacity: isActive ? 0 : 1,
            width: palletPreviewWidth
          }}
          {...events}
        >
          <PalletPreview {...props} />
        </div>
      )}
    </Draggable>
  )
}

export default DraggablePalletPreviewIdle;
