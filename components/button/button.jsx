// React
import React from 'react'

// Prop Types
import { func, string } from 'prop-types'

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '150px',
    },
  },
}))

const ContainedButtons = ({ color, text, handleClick, handleClickType }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color={color}
        onClick={() => handleClick(handleClickType)}
      >
        {text}
      </Button>
    </div>
  )
}

ContainedButtons.propTypes = {
  color: string.isRequired,
  text: string.isRequired,
  handleClick: func.isRequired,
  handleClickType: string.isRequired,
}

export default ContainedButtons
