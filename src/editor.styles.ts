import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

export const useGtxEditorStyles = makeStyles((theme) => {
  const { palette, transitions } = theme
  return {
    root: {},
    EditorContainer: {
      position: 'relative',
      border: `1px solid ${grey[300]}`,
      borderRadius: 4,
      transition: transitions.create(['border'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shortest
      }),
      boxSizing: 'content-box',
      '&:hover': {
        border: '1px solid rgba(0, 0, 0, 0.87)'
      },
      '&:focus $editorLabel': {
        border: '1px solid rgba(0, 0, 0, 0.87)'
      },
      '&:focus-within': {
        border: `2px solid ${palette.primary.dark}`
      },
      '&:focus-within $editorLabel': {
        top: 0,
        transform: 'translateY(-50%) scale(.9)',
        backgroundColor: 'white',
        color: palette.primary.dark
      },
      '&:focus-within $editorLabelUp': {
        color: palette.primary.dark
      }
    },
    ...toolbarStyles(theme),
    ...editorStyles(theme),
    ...MixStyles(theme)
  }
})

const toolbarStyles = (theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      padding: theme.spacing(1)
      // borderBottom: `1px solid ${grey[300]}`
    },
    toolbarControl: {
      margin: theme.spacing(0, 0.5)
    },
    selectedToolbarMenuItem: {
      background: theme.palette.action.hover
    }
  })

const editorStyles = (theme: Theme) =>
  createStyles({
    editor: {
      padding: '0px 14px',
      height: '200px',
      maxHeight: '200px',
      overflow: 'auto'
    },
    editorLabel: {
      position: 'absolute',
      left: '8px',
      padding: '0 0.3rem',
      margin: '0 0.5rem',
      fontSize: '12px',
      color: theme.palette.text.secondary,
      top: '29%',
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeIn
      }),
      transformOrigin: 'left top',
      pointerEvents: 'none'
    },
    editorLabelUp: {
      position: 'absolute',
      left: '8px',
      padding: '0 0.3rem',
      margin: '0 0.5rem',
      fontSize: '12px',
      color: theme.palette.text.secondary,
      transformOrigin: 'left top',
      pointerEvents: 'none',
      top: 0,
      transform: 'translateY(-50%) scale(.9)',
      backgroundColor: 'white'
    }
  })

const MixStyles = (_: Theme) =>
  createStyles({
    flexColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    flexColumnCenterChilds: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    flexRow: {
      display: 'flex'
    },
    fill: {
      flexGrow: 1
    },
    error: {
      borderBottom: '2px solid red'
    }
  })
