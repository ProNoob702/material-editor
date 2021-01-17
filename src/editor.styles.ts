import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

export const useGtxEditorStyles = makeStyles(
  ({ spacing, transitions, palette }) => ({
    root: {},
    EditorContainer: {
      position: 'relative',
      border: `1px solid ${grey[300]}`,
      borderRadius: 5,
      transition: transitions.create(['border-color', 'height'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen
      }),
      boxSizing: 'border-box',
      '&:hover': {
        border: '1px solid rgba(0, 0, 0, 0.87)'
      },
      '&:focus-within': {
        border: `2px solid ${palette.primary.dark}`
      },
      '&:focus-within $editorLabel': {
        color: palette.primary.dark
      }
    },
    editorLabel: {
      position: 'absolute',
      background: 'white',
      transform: 'translateY(-50%)',
      top: 0,
      left: '8px',
      padding: '0 0.3rem',
      margin: '0 0.5rem',
      fontSize: '12px',
      color: palette.text.secondary
    },
    toolbar: {
      display: 'flex',
      padding: spacing(2, 1)
    },
    toolbarControl: {
      margin: spacing(0, 0.5)
    },
    editor: {
      padding: '0px 14px',
      height: '200px',
      maxHeight: '200px',
      overflow: 'auto'
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    flexColumnCenterChilds: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    error: {
      borderBottom: '2px solid red'
    },
    hidePlaceholder: {
      display: 'none'
    }
  })
)
