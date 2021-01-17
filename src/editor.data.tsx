import React from 'react'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import StrikethroughIcon from '@material-ui/icons/StrikethroughS'
import HighlightIcon from '@material-ui/icons/Highlight'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import CodeIcon from '@material-ui/icons/Code'
import { ControlsNames, GTXEditorControlData } from './models'

export const getControlDataByName = (
  controlName: ControlsNames
): GTXEditorControlData | undefined => {
  return allControls[controlName]
}

export const getInlineControlsData = (): GTXEditorControlData[] => {
  return Object.values(inlineStyleControls) as GTXEditorControlData[]
}

export const getTxtBlockControlsData = (): GTXEditorControlData[] => {
  return Object!.values(textBlockTypeControlsData) as GTXEditorControlData[]
}

export const getExtraBlockControlsData = (): GTXEditorControlData[] => {
  return Object.values(extraBlockTypeControlsData) as GTXEditorControlData[]
}

const inlineStyleControls: Partial<
  Record<ControlsNames, GTXEditorControlData>
> = {
  bold: {
    label: 'Bold',
    name: 'bold',
    style: 'BOLD',
    icon: <FormatBoldIcon />,
    type: 'inline'
  },
  italic: {
    label: 'Italic',
    name: 'italic',
    style: 'ITALIC',
    icon: <FormatItalicIcon />,
    type: 'inline'
  },
  underline: {
    label: 'Underline',
    name: 'underline',
    style: 'UNDERLINE',
    icon: <FormatUnderlinedIcon />,
    type: 'inline'
  },
  strikethrough: {
    label: 'Strikethrough',
    name: 'strikethrough',
    style: 'STRIKETHROUGH',
    icon: <StrikethroughIcon />,
    type: 'inline'
  },
  highlight: {
    label: 'Highlight',
    name: 'highlight',
    style: 'HIGHLIGHT',
    icon: <HighlightIcon />,
    type: 'inline'
  }
}

const textBlockTypeControlsData: Partial<
  Record<ControlsNames, GTXEditorControlData>
> = {
  H1: {
    label: 'H1',
    name: 'H1',
    style: 'header-one',
    type: 'block'
  },
  H2: {
    label: 'H2',
    name: 'H2',
    style: 'header-two',
    type: 'block'
  },
  H3: {
    label: 'H3',
    name: 'H3',
    style: 'header-three',
    type: 'block'
  },
  H4: {
    label: 'H4',
    name: 'H4',
    style: 'header-four',
    type: 'block'
  },
  H5: {
    label: 'H5',
    name: 'H5',
    style: 'header-five',
    type: 'block'
  },
  H6: {
    label: 'H6',
    name: 'H6',
    style: 'header-six',
    type: 'block'
  }
}

const extraBlockTypeControlsData: Partial<
  Record<ControlsNames, GTXEditorControlData>
> = {
  bulletList: {
    label: 'UL',
    name: 'bulletList',
    style: 'unordered-list-item',
    icon: <FormatListBulletedIcon />,
    type: 'block'
  },
  numberList: {
    label: 'OL',
    name: 'numberList',
    style: 'ordered-list-item',
    icon: <FormatListNumberedIcon />,
    type: 'block'
  },
  quote: {
    label: 'Blockquote',
    name: 'quote',
    style: 'blockquote',
    icon: <FormatQuoteIcon />,
    type: 'block'
  },
  code: {
    label: 'Code Block',
    name: 'code',
    style: 'code-block',
    icon: <CodeIcon />,
    type: 'block'
  }
}

const allControls = {
  ...inlineStyleControls,
  ...textBlockTypeControlsData,
  ...extraBlockTypeControlsData
}

// import TitleIcon from "@material-ui/icons/Title";
// import InsertLinkIcon from "@material-ui/icons/InsertLink";
// import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
// import FormatClearIcon from "@material-ui/icons/FormatClear";
// import SaveIcon from "@material-ui/icons/Save";
// import UndoIcon from "@material-ui/icons/Undo";
// import RedoIcon from "@material-ui/icons/Redo";
/*
{
  undo: {
    label: "Undo",
    name: "undo",
    style: "UNDO",
    icon: <UndoIcon />,
    type: "callback"
  },
  redo: {
    label: "Redo",
    name: "redo",
    style: "REDO",
    icon: <RedoIcon />,
    type: "callback"
  },
  link: {
    label: "Link",
    name: "link",
    style: "LINK",
    icon: <InsertLinkIcon />,
    type: "callback",
    id: "link-control"
  },
  media: {
    label: "Media",
    name: "media",
    style: "IMAGE",
    icon: <PhotoLibraryIcon />,
    type: "callback",
    id: "media-control"
  },
  clear: {
    label: "Clear",
    name: "clear",
    style: "clear",
    icon: <FormatClearIcon />,
    type: "callback"
  },
  save: {
    label: "Save",
    name: "save",
    style: "save",
    icon: <SaveIcon />,
    type: "callback"
  }
};


*/
