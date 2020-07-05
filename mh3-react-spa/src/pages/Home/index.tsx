import React from 'react'
import './styles.css'
import { Grid, makeStyles, Theme, createStyles, Paper } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
    },
    paper: {
      height: 300,
      width: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const Home: React.FC = () => {

  const history = useHistory();

  const classes = useStyles();

  const handleSetTeacher = () => {
    const user = {
      name: 'Ana2',
      type: 'Teacher',
      class: 'Português',
      img: 'assets/images/teacher.jpg'
    }
    sessionStorage.setItem('user', JSON.stringify(user))
    console.log(user);
    history.push('/teacher-area')
  }

  const handleSetStudent = () => {
    const user = {
      name: 'Fernando',
      type: 'Student',
      class: '5º Ano',
      img: './assets/images/student.jpg'
    }
    sessionStorage.setItem('user', JSON.stringify(user))
    history.push('/student-area')
  }

  return(
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key='a' item>
            <Paper className={classes.paper} onClick={handleSetTeacher}>Professor</Paper>
          </Grid>
          <Grid key='b' item>
            <Paper className={classes.paper} onClick={handleSetStudent}>Aluno</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home