import * as React from 'react'
import { useGtxEditorStyles } from './editor.styles'
import 'draft-js/dist/Draft.css'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { Typography } from '@material-ui/core'
import { EditorToolbar } from './editorToolbar.component'
import { EditorProps } from './models'

export default function MaterialEditor(props: EditorProps) {
  const {
    field,
    form: { setFieldValue },
    editorLabel,
    customClasses,
    shrink,
    outlined
  } = props
  const defaultClasses = useGtxEditorStyles()
  const classes = customClasses || defaultClasses
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
  const onNewMedia = () => {}
  return (
    <div className={classes.EditorContainer}>
      <Typography
        className={shrink ? classes.editorLabelUp : classes.editorLabel}
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
          onNewMedia={onNewMedia}
          classes={classes}
          shrink={shrink || true}
          outlined={outlined || true}
        />
      </div>
      <div className={classes.editor}>
        <Editor
          editorState={editorState}
          onChange={(nEditorState) => setFieldValue(field.name, nEditorState)}
        />
      </div>
    </div>
  )
}
//   const fieldError = getIn(errors, field.name);
//   const showError = getIn(touched, field.name) && !!fieldError;
