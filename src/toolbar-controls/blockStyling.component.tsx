import React from 'react'
import { ToolbarBtn } from './btn.component'
import {
  getExtraBlockControlsData,
  getTxtBlockControlsData
} from '../editor.data'
import { SelectControl } from './select.component'
import { EditorToolbarProps } from '../models'

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
    <>
      <SelectControl
        currentBlockType={blockType}
        onChange={toggleBlockType}
        options={txtBlockControlsOptions}
        classes={classes}
        label='Title'
      />
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
    </>
  )
}
