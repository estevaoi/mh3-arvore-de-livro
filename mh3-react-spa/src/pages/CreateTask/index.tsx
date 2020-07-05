import { FormControl, OutlinedInput, RadioGroup, FormControlLabel, Radio, Button, Divider, InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useEffect } from 'react';
import { useStyles } from '../../styles';
import { ModalProps } from 'interfaces/modal.props';
import { Task } from 'interfaces/task';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const CreateTask: React.FC<ModalProps> = (props: ModalProps) => {

  const { onClose, selectedValue } = props;

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [selectedQuestion, setSelectedQuestion] = React.useState<any>();
  const [values, setValues] = React.useState<Task>({
    _id: '',
    title: '',
    description: '',
    questions: [],
    rightAnswer: null
  });

  useEffect(() => {
    if (selectedValue)
      setValues(selectedValue)
  }, [selectedValue])

  const handleChange: any = (prop: keyof Task) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleAddQuestion = () => {
    const qst = [...values.questions];
    qst.push({title: selectedQuestion, identifier: (qst.length + 1)});
    
    if (!values.rightAnswer)
      setValues({ ...values, rightAnswer: 1, questions: qst});
    else
      setValues({ ...values, questions: qst});

    setSelectedQuestion('')
  }

  const handleSave = () => {
    onClose(values);
  }

  const handleClose = () => {
    onClose();
  }

  return(
    <div style={modalStyle} className={classes.paper2}>
      <div className={classes.flexCol}>
        <h3>Criar/ Alterar Tarefa</h3>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-title">Nome da Tarefa</InputLabel>
          <OutlinedInput
            id="outlined-title"
            value={values.title}
            onChange={handleChange('title')}
            labelWidth={115}
          />
        </FormControl>
        <TextField
          className={classes.margin}
          fullWidth
          label='Descrição da Tarefa'
          id="task-description"
          multiline
          rows={4}
          defaultValue={values.description}
          onChange={handleChange('description')}
          variant="outlined"
        />
        <div>
          <h3>Alternativas</h3>
          <div className={classes.flexRow}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-title">Texto da alternativa</InputLabel>
              <OutlinedInput
                fullWidth
                id="quest"
                value={selectedQuestion}
                defaultValue={selectedQuestion}
                onChange={(event: any) => setSelectedQuestion(event?.target?.value)}
                labelWidth={140}
              />
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleAddQuestion}>
              Adicionar
            </Button>
          </div>
          {(
            values?.questions?.length > 0 ?
            <div className={classes.groupQuestions}>
              <FormControl component="fieldset" className={classes.margin}>
                <RadioGroup className={`${classes.flexRow} ${classes.justifyCenter}`} aria-label="quiz" name="quiz" value={Number(values.rightAnswer)} onChange={handleChange('rightAnswer')}>
                  {(
                    values.questions.map(item => (
                      <FormControlLabel value={item.identifier} control={<Radio />} label={item.title} key={item.identifier}/>
                    ))
                  )}
                </RadioGroup>
              </FormControl>
            </div> : null
          )}
        </div>

        <div className={`${classes.flexRow} ${classes.justifyCenter} ${classes.marginTop24}`}>
          <Button variant="contained" color="primary" style={{width: 305, marginRight: 24}} onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="contained" color="secondary" style={{width: 305}} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateTask