import * as React from 'react'
import { useGtxEditorStyles } from './editor.styles'
import 'draft-js/dist/Draft.css'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { Typography } from '@material-ui/core'
import { EditorToolbar } from './editorToolbar.component'
import { EditorProps } from './models'

export const MaterialEditor: React.FC<EditorProps> = ({
  field,
  form: { setFieldValue },
  editorLabel,
  placeholder,
  customClasses
}) => {
  const defaultClasses = useGtxEditorStyles()
  const classes = customClasses || defaultClasses
  //   const fieldError = getIn(errors, field.name);
  //   const showError = getIn(touched, field.name) && !!fieldError;
  const editorState = field.value
  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }
  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType))
  }
  const onChange = (nEditorState: EditorState) => {
    setFieldValue(field.name, nEditorState)
  }
  return (
    <div className={classes.EditorContainer}>
      <Typography
        className={classes.editorLabel}
        variant='caption'
        gutterBottom
      >
        {editorLabel}
      </Typography>
      <div className={classes.toolbar}>
        <EditorToolbar
          editorState={editorState}
          toggleInlineStyle={toggleInlineStyle}
          toggleBlockType={toggleBlockType}
          classes={classes}
        />
      </div>
      <div className={classes.editor}>
        <Editor
          editorState={editorState}
          onChange={(nEditorState) => setFieldValue(field.name, nEditorState)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
