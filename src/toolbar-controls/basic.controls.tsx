import React, { useState } from 'react'
import { Button, IconButton, TextField } from '@material-ui/core'
import { EditorStyles, PickedMediaData } from '../models'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from '@material-ui/core/Popover'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {
  Check,
  Delete,
  InsertPhoto,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight
} from '@material-ui/icons'

// #region Btn
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

// #endregion Btn

// #region Select
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

// #endregion Select

// #region Menu
interface ToolbarDropDownProps {
  currentBlockType: string
  onChange: (chosenVal: string) => void
  icon: React.ReactNode
  classes: EditorStyles
  options: { label: string; value: string }[]
}

export const ToolbarDropDown: React.FC<ToolbarDropDownProps> = ({
  icon,
  classes,
  options,
  currentBlockType,
  onChange
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenuItemClick = (newVal: string) => {
    onChange(newVal)
    setAnchorEl(null)
  }
  return (
    <React.Fragment>
      <IconButton
        aria-haspopup='true'
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={1}
      >
        {options.map((o) => (
          <MenuItem
            className={
              currentBlockType === o.value
                ? classes.selectedToolbarMenuItem
                : ''
            }
            key={o.value}
            value={o.value}
            onClick={() => handleMenuItemClick(o.value)}
          >
            {o.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )
}
// #endregion Menu

// #region ImagePicker
interface ImagePickerDropDownProps {
  onNewMedia: (data: PickedMediaData) => void
  classes: EditorStyles
  shrink: boolean
}

export const ImagePickerDropDown: React.FC<ImagePickerDropDownProps> = ({
  classes,
  onNewMedia,
  shrink
}) => {
  const [data, setData] = useState<PickedMediaData>({
    url: undefined,
    alignment: undefined
  })
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const onClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleConfirm = () => {
    onNewMedia(data)
  }
  const handleReset = () => {
    setData({
      url: undefined,
      alignment: undefined
    })
  }
  const open = Boolean(anchorEl)
  return (
    <React.Fragment>
      <IconButton
        className={classes.toolbarControl}
        aria-label='ImagePick'
        aria-describedby='ImagePick'
        onClick={onClickBtn}
        color='default'
      >
        <InsertPhoto />
      </IconButton>
      <Popover
        id='ImagePick'
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <TextField
          label='URL'
          variant='outlined'
          autoFocus
          fullWidth
          InputLabelProps={{
            shrink
          }}
          margin='normal'
        />
        <ButtonGroup
          size='large'
          variant='outlined'
          aria-label='alignement'
          fullWidth
        >
          <Button
            color={data.alignment === 'left' ? 'primary' : 'default'}
            size='small'
            onClick={() => setData({ ...data, alignment: 'left' })}
          >
            <FormatAlignLeft />
          </Button>
          <Button
            color={data.alignment === 'center' ? 'primary' : 'default'}
            size='small'
            onClick={() => setData({ ...data, alignment: 'center' })}
          >
            <FormatAlignCenter />
          </Button>
          <Button
            color={data.alignment === 'right' ? 'primary' : 'default'}
            size='small'
            onClick={() => setData({ ...data, alignment: 'right' })}
          >
            <FormatAlignRight />
          </Button>
        </ButtonGroup>
        <div className={classes.flexRow}>
          {data && data.url ? (
            <Button variant='outlined' color='secondary' onClick={handleReset}>
              <Delete />
            </Button>
          ) : null}
          <span className='fill' />
          <Button
            disabled={!data.url}
            variant='outlined'
            color='primary'
            onClick={handleConfirm}
          >
            <Check />
          </Button>
        </div>
      </Popover>
    </React.Fragment>
  )
}
// #endregion
