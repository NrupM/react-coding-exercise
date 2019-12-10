import React from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../style/theme'

const ErrorPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}> Oops! </h1>
      <p className={classes.subtitle}>Something went wrong.</p>
      <p className={classes.text}> We could not find any of the events you were looking for. Please take a look at our main events listing page</p>
      <button className={classes.button}>
        <a className={classes.link} href='/'>Return to Events Page </a>
      </button>
    </div>
  )
}

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: 500,
    height: 800,
    margin: '0 auto',
    textAlign: 'center'
  },
  link: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 400
  },
  title: {
    fontSize: 150,
    textTransform: 'none',
    fontFamily: 'Helvetica'
  },
  subtitle: {
    fontSize: 26,
    fontFamily: theme.body,
    fontWeight: 400,
    lineHeight: 2,
    letterSpacing: 0.031,
    margin: 20
  },
  text: {
    fontSize: 18
  },
  button: {
    color: theme.colors.primary,
    backGroundColor: theme.colors.white,
    margin: 20,
    padding: 20,
    border: '#D8127D 1px solid'
  }
}, { name: 'ErrorPage' })

export default ErrorPage
