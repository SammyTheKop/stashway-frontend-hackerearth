// React
import React from 'react'

// Prop types
import { node, string } from 'prop-types'

// Material UI for React
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Components
import ScrollTop from './scrollTop'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    background: 'black',
  },
  container: {
    marginTop: theme.spacing(0),
  },
  root: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
}))

const BackToTop = props => {
  const { children, header } = props
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{header}</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.root}>
        <Box my={2} className={classes.container}>
          {children}
        </Box>
      </Container>
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

BackToTop.propTypes = {
  children: node.isRequired,
  header: string.isRequired,
}

export default BackToTop
