import { Paper, Typography, Button } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles';
import SendIcon from '@material-ui/icons/Send'
import CheckIcon from '@material-ui/icons/Check'
import { Task } from 'interfaces/task';

export default function AdventurePhase() {

  const history = useHistory();
  const classes = useStyles();
  
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
              <span className={`${classes.cardText}`}>{item?.description}</span>
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
