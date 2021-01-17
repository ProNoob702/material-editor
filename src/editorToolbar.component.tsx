import React from 'react'
import { EditorToolbarProps } from './models'
import { BlockStyleControls } from './toolbar-controls/blockStyling.component'
import { InlineStyleControls } from './toolbar-controls/inlineStyling.component'

export const EditorToolbar: React.FC<EditorToolbarProps> = (props) => {
  return (
    <React.Fragment>
      <InlineStyleControls {...props} />
      <BlockStyleControls {...props} />
    </React.Fragment>
  )
}
