import { FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useStyles } from '../../styles';

export default function AdventureTask(props: any) {

  const history = useHistory();
  const location = useLocation();
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
            description: 'Ao ler o capitulo, podemos dizer que ele termina na página 20?',
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
  const [actualTask, setActualTask] = React.useState<any>(adventure.phases[0].tasks[0]);

  useEffect(() => {
    const id = 1;
    // api.get(`adventure/${id}`).then(response => {
    //   const data = response?.data;
    //   setAdventure(response?.data);
    // })
  }, [])

  const handleChange = (value: string) => {
    setActualTask({...actualTask, answer: Number(value)})
  }

  const handleGoBack = () => {
    history.push(`/student-adventure-phase/${props?.match?.params?.idPhase}`)
  }
  
  return (
    <div>
      <h1>Desafio</h1>
      {( adventure?.book ? <div className={classes.flexCol}>
        <div className={`${classes.flexRow} ${classes.flexStart}`}>
          <Paper elevation={3} className={classes.adventureCard}>
            <img src={adventure?.book?.img} alt={adventure?.book?.title} className={classes.adventureList} />
          </Paper>
          <div className={classes.flexColFull} style={{padding: '0 24px 24px'}}>
            <h2>{actualTask?.title}</h2>
            <Typography paragraph>
              {actualTask?.description}
            </Typography>
          </div>
        </div>
      </div> : null
      )}
      <br/><br/>
      <h2>Selecione a alternativa correta</h2>
      <div className={classes.groupQuestions}>
        <FormControl component="fieldset" className={classes.margin}>
          <RadioGroup className={`${classes.flexRow} ${classes.justifyCenter}`} aria-label="quiz" name="quiz" value={Number(actualTask.answer)} onChange={(event) => handleChange(event.target.value)}>
            {(
              actualTask.questions.map((item: any) => (
                <FormControlLabel value={item.identifier} control={<Radio />} label={item.title} key={item.identifier}/>
              ))
            )}
          </RadioGroup>
        </FormControl>
      </div>
      <div className={`${classes.flexRow} ${classes.justifyCenter} ${classes.marginTop24}`}>
        <Button variant="contained" color="primary" style={{width: 305, marginRight: 24}} onClick={handleGoBack}>
          Confirmar Resposta 
        </Button>
        <Button variant="contained" color="secondary" style={{width: 305}} onClick={handleGoBack}>
          Voltar 
        </Button>
      </div>
    </div>
  );
}
