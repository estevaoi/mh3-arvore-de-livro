import { Button, Dialog, DialogTitle, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { DialogProps } from 'interfaces/dialog-props';
import { ADVENTURE_MOCK } from 'mock/adventure.mock';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles';

function CloseAdventureDialog(props: DialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={classes.dialog}>
        <DialogTitle id="simple-dialog-title">Parabéns!!!</DialogTitle>
        <span>Voce concluíu a aventura!</span>
        <div>
          <span style={{paddingRight: 5}}>Ganhou</span><span style={{color: '#8553f4'}}>+1000 pontos!</span>
        </div>
        
        <Button variant="contained" color="secondary" style={{width: 219, marginTop: 16}} onClick={handleClose}>
          Fechar
        </Button>
    </div>
      </Dialog>
  )
}

export default function AdventureStudent() {

  const history = useHistory();
  const classes = useStyles();
  const [actualPhase, setActualPhase] = React.useState<any>(0);
  const [adventure, setAdventure] = React.useState<any>(ADVENTURE_MOCK);

  const [open, setOpen] = React.useState<boolean>(false);

  useEffect(() => {
    const id = 1;
    // api.get(`adventure/${id}`).then(response => {
    //   const data = response?.data;
    //   setAdventure(response?.data);
    // })
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseAdventure = () => {
    setOpen(true)
  }

  const handleSelectPhase = (phase: any) => {
    setActualPhase(phase)
    history.push(`/student-adventure-phase/${phase._id}`)
  }
  
  return (
    <div>
      <h1>Aventura: {adventure?.title}</h1>
      {( adventure?.book ? <div className={classes.flexCol}>
        <div className={`${classes.flexRow} ${classes.flexStart}`}>
          <Paper elevation={3} className={classes.adventure}>
            <img src={adventure?.book?.img} alt={adventure?.book?.title} className={classes.adventureInside} />
          </Paper>
          <div className={classes.flexColFull} style={{padding: '0 24px 24px'}}>
            <h2>Livro base: {adventure?.book?.title}</h2>
            <div className={classes.flexRow}>
              <h3 style={{margin: '0px'}}>Autor(a):</h3><span style={{fontSize: '1.17em'}}>{adventure?.book?.author}</span>
            </div>
            <br/>
            <br/>
            <Typography paragraph>
              {adventure?.book?.description}
            </Typography>
          </div>
          <div className={`${classes.flexCol} ${classes.justifyCenter}`} style={{height: 415, justifyContent: 'center'}}>
            <Button variant="contained" color="primary" style={{width: 219, marginBottom: 24}} href={`https://www2.arvoredelivros.com.br/biblioteca/livro/${adventure?.book?.path}`} target="_blank">
              Ler o livro
            </Button>
            <Button variant="contained" color="secondary" style={{width: 219}} onClick={handleCloseAdventure}>
              Concluír Anventura
            </Button>
          </div>
        </div>
      </div> : null
      )}
      <br/><br/>
      <h2>Fases</h2>
      <Timeline align="alternate">
        {(
          adventure?.phases?.map((item: any, index: number) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{backgroundColor: item.status === 'ok' ? '#19c738' : ''}} color={'grey'}>
                  {(
                    item.status === 'ok' ? <CheckIcon onClick={() => handleSelectPhase(item)}/> : <div onClick={() => handleSelectPhase(item)} className={`${classes.cardNumberTimeline}`}>{index+1}</div>
                  )}
                </TimelineDot>
                {(index < (adventure?.phases.length - 1) ? <TimelineConnector /> : null)}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paperTimeline} onClick={() => handleSelectPhase(item)}>
                  <Typography variant="h6" component="h1">
                    {item?.title}
                  </Typography>
                  <Typography>{item?.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
        ))
        )}
      </Timeline>
      <CloseAdventureDialog selectedValue={adventure} open={open} onClose={handleClose}/>
    </div>
  );
}
