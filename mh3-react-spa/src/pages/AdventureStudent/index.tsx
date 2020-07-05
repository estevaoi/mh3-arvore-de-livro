import { Button, Paper, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles';

export default function AdventureStudent() {

  const history = useHistory();
  const classes = useStyles();
  const [actualPhase, setActualPhase] = React.useState<any>(0);
  const [adventure, setAdventure] = React.useState<any>({
    _id: '1',
    title: 'Wonder Women',
    book: {
      path: 'wonder-women',
      title: 'Wonder Women',
      img: 'https://s3-sa-east-1.amazonaws.com/files.arvoredelivros.com.br/books/images/wonder-women/thumb_9788555780417.jpg',
      author: 'Sam Maggs',
      description: 'Pense no quanto alguém é capaz de alcançar quando tem à disposição todos os recursos e o apoio de que precisa para desenvolver plenamente suas habilidades. Agora pense no quão especial alguém deve ser para conseguir os mesmos resultados quando nada ao redor conspira a seu favor. Em \"Wonder Women\", o leitor conhecerá mulheres além de seu tempo. Pessoas brilhantes, que se recusaram a se acomodar no papel de coadjuvantes e foram à luta, tornando-se protagonistas de sua própria vida. Cientistas, engenheiras, matemáticas, aventureiras e inventoras cujos feitos mudaram os rumos da história.'
    },
    phases: [
      {
        _id: '1',
        title: 'Inicio',
        status: 'ok',
        tasks: [
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            status: 'ok',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
          {
            _id: '1',
            title: 'Ler Capitulo 1 em 2 Dias',
            description: 'Ler Capitulo 1 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          },
        ],
        description: 'Era uma vez..'
      },
      {
        _id: '2',
        title: 'Meio',
        tasks: [
          {
            _id: '2',
            title: 'Ler Capitulo 4 em 2 Dias',
            description: 'Ler Capitulo 5 em 2 Dias',
            questions: [
              {
                identifier: 1,
                title: 'Sim'
              },
              {
                identifier: 2,
                title: 'Não'
              },
            ],
            rightAnswer: 1
          }
        ],
        description: 'Chegamos no meio do livro'
      },
    ],
  });

  useEffect(() => {
    const id = 1;
    // api.get(`adventure/${id}`).then(response => {
    //   const data = response?.data;
    //   setAdventure(response?.data);
    // })
  }, [])

  const handleCloseAdventure = () => {
    
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
            <h2>{adventure?.book?.title}</h2>
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
                <TimelineDot style={{backgroundColor: item.status === 'ok' ? '#24a37b' : ''}} color={'grey'}>
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
    </div>
  );
}
