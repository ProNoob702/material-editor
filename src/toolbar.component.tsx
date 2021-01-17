import React from 'react'
import { useGtxEditorStyles } from './gtxEditor.styles'
import { FieldProps } from 'formik'
import 'draft-js/dist/Draft.css'
import { Editor, EditorState, RichUtils } from 'draft-js'
import { Typography } from '@material-ui/core'
import { BlockStyleControls } from './toolbar-controls/blockStyling.component'
import { InlineStyleControls } from './toolbar-controls/inlineStyling.component'

export type EditorStyles = ReturnType<typeof useGtxEditorStyles>

interface editorProps extends FieldProps<any> {
  helperText: string
  editorLabel: string
  placeholder: string
  customClasses: EditorStyles
}

/* ============= MAIN COMPONENT ============= */

const GTXEditorComponent: React.FC<editorProps> = ({
  field,
  form: { touched, errors, setFieldValue },
  helperText,
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

export default GTXEditorComponent

/* ============= TOOLBAR ============= */

export interface EditorToolbarProps {
  editorState: EditorState
  toggleInlineStyle: (newStyle: string) => void
  toggleBlockType: (newBlockType: string) => void
  classes: EditorStyles
}

const EditorToolbar: React.FC<EditorToolbarProps> = (props) => {
  return (
    <>
      <InlineStyleControls {...props} />
      <BlockStyleControls {...props} />
    </>
  )
}
