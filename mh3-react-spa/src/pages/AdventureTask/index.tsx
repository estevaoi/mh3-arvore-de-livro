import { FormControl, FormControlLabel, Paper, Radio, RadioGroup, Typography, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useStyles } from '../../styles';
import { Adventure } from 'interfaces/adventure';
import { ADVENTURE_MOCK } from 'mock/adventure.mock';

export default function AdventureTask(props: any) {

  const history = useHistory();
  const classes = useStyles();
  
  const [adventure, setAdventure] = React.useState<Adventure>(ADVENTURE_MOCK);
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
            <Button variant="contained" color="primary" style={{width: 219, marginBottom: 24}} href={`https://www2.arvoredelivros.com.br/biblioteca/livro/${adventure?.book?.path}`} target="_blank">
              Ler o livro
            </Button>
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
