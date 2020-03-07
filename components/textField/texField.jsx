// React
import React from 'react'

// Prop Types
import { func } from 'prop-types'

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const BasicTextFields = ({ handleChange }) => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={() => handleChange(event)}
      />
    </form>
  )
}

BasicTextFields.propTypes = {
  handleChange: func.isRequired,
}

export default BasicTextFields
