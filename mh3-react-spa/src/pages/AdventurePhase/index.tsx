import { Button, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SendIcon from '@material-ui/icons/Send';
import Timeline from '@material-ui/lab/Timeline';
import { Task } from 'interfaces/task';
import { ADVENTURE_MOCK } from 'mock/adventure.mock';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles';

export default function AdventurePhase() {

  const history = useHistory();
  const classes = useStyles();
  
  const [adventure, setAdventure] = React.useState<any>(ADVENTURE_MOCK);
  const [actualPhase, setActualPhase] = React.useState<any>(0);

  useEffect(() => {
    const id = 1;
    // api.get(`adventure/${id}`).then(response => {
    //   const data = response?.data;
    //   setAdventure(response?.data);
    // })
  }, [])

  const handleGoToBook = () => {
    history.push(`/student-adventure/${adventure._id}`)
  }

  const handleGoToTask = (task: any) => {
    history.push(`/student-adventure-task/${adventure.phases[actualPhase]._id}/${task._id}`)
  }
  
  return (
    
    <div>
      <h1>Fase {actualPhase+1}</h1>
      {( adventure?.book ? <div className={classes.flexCol}>
        <div className={`${classes.flexRow} ${classes.flexStart}`}>
          <Paper elevation={3} className={classes.adventureCard}>
            <img src={adventure?.book?.img} alt={adventure?.book?.title} className={classes.adventureList} />
          </Paper>
          <div className={classes.flexColFull} style={{padding: '0 24px 24px'}}>
            <h2>{adventure.phases[actualPhase]?.title}</h2>
            <Typography paragraph>
              {adventure.phases[actualPhase]?.description}
            </Typography>
          </div>
        </div>
      </div> : null
      )}
      <br/><br/>
      <h2>Tarefas</h2>
      <Timeline align="alternate">
        {(
          adventure.phases[actualPhase].tasks?.map((item: Task, index: number) => (
          <div className={classes.flexRow} key={index}>
            <Paper elevation={3} className={classes.card} style={item.status === 'ok' ? {backgroundColor: '#19c738'} : {}} onClick={() => handleGoToTask(item)}>
              {(
                item.status === 'ok' ? <CheckIcon style={{color: '#fff'}}/> : <span className={`${classes.cardNumber}`}>{index+1}</span>
              )}
            </Paper>
            <Paper elevation={3} className={classes.cardDescription} onClick={() => handleGoToTask(item)}>
              <span className={`${classes.cardText}`}>{item?.title}</span>
              <span>+{item?.points} pontos XP</span>
              <SendIcon/>
            </Paper>
          </div>
        ))
        )}
      </Timeline>

      <div className={`${classes.flexRow} ${classes.justifyCenter}`}>
        <Button variant="contained" color="secondary" style={{width: 219, marginTop: 16}} onClick={handleGoToBook}>
          Concluír Fase
        </Button>
      </div>
    </div>
  );
}
