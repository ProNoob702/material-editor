import React from 'react'
import {
  getExtraBlockControlsData,
  getTxtBlockControlsData
} from '../editor.data'
import { EditorToolbarProps } from '../models'
import { ToolbarBtn, ToolbarDropDown } from './basic.controls'
import TextFieldsIcon from '@material-ui/icons/TextFields'
const txtBlockControlsOptions = [
  {
    label: 'Normal',
    value: 'unstyled'
  },
  ...getTxtBlockControlsData().map((x) => ({ label: x.label, value: x.style }))
]

export const BlockStyleControls: React.FC<EditorToolbarProps> = ({
  editorState,
  toggleBlockType,
  classes
}) => {
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <React.Fragment>
      {/* Title Control */}
      <ToolbarDropDown
        currentBlockType={blockType}
        onChange={toggleBlockType}
        options={txtBlockControlsOptions}
        classes={classes}
        icon={<TextFieldsIcon />}
      />
      {/* Other controls */}
      {getExtraBlockControlsData().map((controlData) => (
        <ToolbarBtn
          key={controlData.label}
          active={controlData.style === blockType}
          onClickBtn={toggleBlockType}
          valueToChoose={controlData.style}
          icon={controlData.icon}
          classes={classes}
        />
      ))}
    </React.Fragment>
  )
}
