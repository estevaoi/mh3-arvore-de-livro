import React from 'react'
import { useStyles } from 'styles'
import { Paper, TextField, Button, Slider, Typography } from '@material-ui/core';
import { ADVENTURE_MOCK } from 'mock/adventure.mock';
import { useHistory } from 'react-router-dom';

const AdventureTeacher: React.FC = () => {

  const history = useHistory();
  const classes = useStyles();
  const [adventure, setAdventure] = React.useState<any>(ADVENTURE_MOCK);

  const handleEditAdventure = () => {
    history.push(`/edit-adventure/1`)
  }

  const handleGoBack = () => {
    history.push(`/teacher-area`)
  }

  return (
    <div>
      <h1>Progresso da Aventura</h1><br/>
      <h2 style={{color: '#1A89A4'}}>{adventure?.title}</h2>
      <div className={`${classes.flexRow} ${classes.flexStart}`}>
        <div className={`${classes.flexCol} ${classes.width50}`}>
          <div className={`${classes.flexRow} ${classes.flexStart}`} style={{justifyContent: 'space-between'}}>
            <Paper elevation={3} className={classes.adventure}>
              <img src={adventure?.book?.img} alt={adventure?.book?.title} className={classes.adventureInside} />
            </Paper>
            <div className={classes.flexCol}>
              <Button variant="contained" color="primary" style={{width: 219, marginBottom: 24}} onClick={handleEditAdventure}>
                Editar
              </Button>
              <Button variant="contained" color="secondary" style={{width: 219, marginBottom: 24}} onClick={handleGoBack}>
                Voltar
              </Button>
            </div>
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
        <div className={`${classes.flexCol} ${classes.width50}`} style={{padding: '0 100px'}}>
          <h3>Progresso das turmas</h3>
          {(
            adventure.progressClass.map((item: any, index: number) => (
              <div>
                <span>{item?.class}</span>
                <Slider
                  key={index}
                  disabled={true}
                  style={{color: item?.color, marginTop: 16}}
                  defaultValue={item.percent}
                  step={1}
                  valueLabelDisplay="on"
                />
              </div>
            ))
          )}
          <br/>
          <h3>Alunos em destaque</h3>
          {(
            adventure.featuredStudents.map((item: any, index: number) => (
              <div>
                <span style={{paddingRight: '5px'}}>{item?.student}</span>
                <span>{item?.class}</span>
                <Slider
                  key={index}
                  disabled={true}
                  style={{color: item?.color, marginTop: 16}}
                  defaultValue={item.percent}
                  step={1}
                  valueLabelDisplay="on"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AdventureTeacher