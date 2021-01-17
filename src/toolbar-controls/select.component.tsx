import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { EditorStyles } from '../models'

interface ISelectControl {
  currentBlockType: string
  onChange: (chosenVal: string) => void
  options: { label: string; value: string }[]
  classes: EditorStyles
  label: string
}

export const SelectControl: React.FC<ISelectControl> = ({
  label,
  currentBlockType,
  onChange,
  options,
  classes
}) => {
  return (
    <FormControl
      size='small'
      variant='outlined'
      className={classes.toolbarControl}
    >
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        name={label}
        value={currentBlockType}
        onChange={(e) => onChange(e.target.value as string)}
        label={label}
        MenuProps={{ elevation: 1 }}
      >
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
