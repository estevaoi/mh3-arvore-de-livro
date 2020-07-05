import React from 'react'
import { useStyles } from 'styles'
import './styles.css'

interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = (props: Props) => {

  const classes = useStyles();
  const { loading } = props;

  return (
    loading ? <div className={classes.contentLoader}>
      <img className='imgLoader' src='./assets/images/logo_vertical.svg' alt=""/>
    </div> : null
  )
}

export default Loader