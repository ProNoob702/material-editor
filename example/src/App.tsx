import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { EditorState } from 'draft-js'
import { Field, Form, Formik } from 'formik'
import CheckIcon from '@material-ui/icons/Check'
import MaterialEditor from 'react-material-editor'

export const useAppStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  formWrapper: {
    flexGrow: 1
  },
  form: {
    margin: theme.spacing(2)
  },
  editorField: {},
  confirmZone: {
    marginTop: theme.spacing(2)
  }
}))

const formData = {
  productEditor: EditorState.createEmpty()
}

function App() {
  const classes = useAppStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h4'>Material-UI Editor + Formik + Yup</Typography>
      <div className={classes.formWrapper}>
        <Formik initialValues={formData} onSubmit={() => {}}>
          <Form className={classes.form} autoComplete='off'>
            <Field
              className={classes.editorField}
              component={MaterialEditor}
              name='productEditor'
              editorLabel='GTX Editor'
              placeholder='Enter Infos'
              shrink
            />
            <div className={classes.confirmZone}>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<CheckIcon />}
              >
                Confirm
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export const useBasicMaterialFieldStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  },
  floatingLabel: {}
}))

// const BasicMaterialField: React.FC<{ label: string }> = ({ label }) => {
//   const classes = useBasicMaterialFieldStyles()
//   return (
//     <div className={classes.root}>
//       <Typography variant='caption' className={classes.floatingLabel}>
//         {label}
//       </Typography>
//     </div>
//   )
// }

export default App
