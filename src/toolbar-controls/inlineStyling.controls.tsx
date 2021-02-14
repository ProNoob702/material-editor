import React from 'react'
import { ToolbarBtn } from './basic.controls'
import { getInlineControlsData } from '../editor.data'
import { EditorToolbarProps } from '../models'

export const InlineStyleControls: React.FC<EditorToolbarProps> = ({
  editorState,
  toggleInlineStyle,
  classes
}) => {
  const currentStyle = editorState.getCurrentInlineStyle()
  return (
    <React.Fragment>
      {getInlineControlsData().map((controlData) => (
        <ToolbarBtn
          key={controlData.label}
          active={currentStyle.has(controlData.style)}
          onClickBtn={toggleInlineStyle}
          valueToChoose={controlData.style}
          icon={controlData.icon}
          classes={classes}
        />
      ))}
    </React.Fragment>
  )
}
