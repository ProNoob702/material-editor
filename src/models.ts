import { EditorState } from 'draft-js'
import { FieldProps } from 'formik'
import { useGtxEditorStyles } from './editor.styles'

export type EditorStyles = ReturnType<typeof useGtxEditorStyles>

export interface EditorProps extends FieldProps<any> {
  helperText: string
  editorLabel: string
  shrink?: boolean
  customClasses: EditorStyles
}

export interface EditorToolbarProps {
  editorState: EditorState
  toggleInlineStyle: (newStyle: string) => void
  toggleBlockType: (newBlockType: string) => void
  classes: EditorStyles
}

export interface GTXEditorControlData {
  id?: string
  name: string
  label: string
  style: string
  icon?: React.ReactNode
  component?: React.ReactNode
  type: 'inline' | 'block' | 'callback'
  active?: boolean
  clickFnName?: string
}

export type ControlsNames =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'link'
  | 'numberList'
  | 'bulletList'
  | 'quote'
  | 'code'
  | 'clear'
  | 'save'
  | 'media'
  | 'strikethrough'
  | 'highlight'
  | 'undo'
  | 'redo'
