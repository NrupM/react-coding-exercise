import React from 'react'
import { createUseStyles } from 'react-jss'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingIndicator = () => {
  const classes = useStyles()
  return (
    <div className={classes.loadingWrapper}>
      <h1 className={classes.title}>
        Loading your events list ...
        <CircularProgress className={classes.loadingIcon} size={50} />
      </h1>
    </div>
  )
}

const useStyles = createUseStyles({
  loadingWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '25%',
    position: 'fixed',
    padding: 10
  },
  loadingIcon: {
    margin: 30
  }
}, { name: 'LoadingIndicator' })

export default LoadingIndicator
