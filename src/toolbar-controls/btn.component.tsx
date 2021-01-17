import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import { EditorStyles } from '../toolbar.component'

interface ToolbarBtnProps {
  active: boolean
  label?: string
  onClickBtn: (chosenVal: string) => void
  valueToChoose: string
  icon: React.ReactNode
  classes: EditorStyles
}

export const ToolbarBtn: React.FC<ToolbarBtnProps> = ({
  active,
  label,
  valueToChoose,
  icon,
  onClickBtn,
  classes
}) => {
  const btnColor = active ? 'primary' : 'default'
  if (label) {
    return (
      <Button
        className={classes.toolbarControl}
        variant='outlined'
        startIcon={icon}
        onClick={() => onClickBtn(valueToChoose)}
        color={btnColor}
      >
        {label}
      </Button>
    )
  } else {
    return (
      <IconButton
        className={classes.toolbarControl}
        aria-label='toolbarBtn'
        onClick={() => onClickBtn(valueToChoose)}
        color={btnColor}
      >
        {icon}
      </IconButton>
    )
  }
}
