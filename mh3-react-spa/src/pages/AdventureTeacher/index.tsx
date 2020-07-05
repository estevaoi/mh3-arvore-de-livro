import React from 'react'
import { useStyles } from 'styles'
import { Paper, TextField, Button, Slider } from '@material-ui/core';
import { ADVENTURE_MOCK } from 'mock/adventure.mock';

const AdventureTeacher: React.FC = () => {

  const classes = useStyles();
  const [adventure, setAdventure] = React.useState<any>(ADVENTURE_MOCK);

  return (
    <div>
      <h1>Progresso da Aventura</h1>
      <h2>{adventure?.title}</h2>
      <div className={`${classes.flexRow} ${classes.flexStart}`}>
        <div className={`${classes.flexCol} ${classes.width50}`}>
          <div className={`${classes.flexRow} ${classes.flexStart}`}>
            <Paper elevation={3} className={classes.adventureCard}>
              <img src={adventure?.book?.img} alt={adventure?.book?.title} className={classes.adventureList} />
            </Paper>
            <Button variant="contained" color="primary" style={{width: 219, marginBottom: 24}}>
              Editar
            </Button>
          </div>
          <div>
            <br/>
            <TextField
              className={classes.margin}
              fullWidth
              label='Anotacoes'
              id="anotations"
              multiline
              rows={4}
              defaultValue={adventure.anotations}
              onChange={() => setAdventure({...adventure, anotations: adventure.anotations})}
              variant="outlined"
            />
          </div>
        </div>
        <div className={`${classes.flexCol} ${classes.width50}`}>
          <h3>Progresso das turmas</h3>
          <Slider
            defaultValue={80}
            aria-labelledby="discrete-slider-always"
            step={10}
            valueLabelDisplay="on"
          />
        </div>
      </div>
    </div>
  )
}

export default AdventureTeacher