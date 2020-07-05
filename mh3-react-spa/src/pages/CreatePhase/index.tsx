import { FormControl, GridList, Modal, OutlinedInput, Paper, Button, InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useStyles } from '../../styles';
import CreateTask from '../CreateTask';
import { ModalProps } from 'interfaces/modal.props';
import { Phase } from 'interfaces/phase';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const CreatePhase: React.FC<ModalProps> = (props: ModalProps) => {

  const { onClose, selectedValue } = props;
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  
  const [taskSelected, setTaskSelected] = React.useState<any>();
  const [values, setValues] = React.useState<Phase>({
    _id: '',
    title: '',
    img: '',
    tasks: [],
    description: ''
  });

  const handleChange: any = (prop: keyof Phase) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (selectedValue)
      setValues(selectedValue)
  }, [selectedValue])
  
  const [open, setOpen] = React.useState(false);
  const handleCreateTask = () => {
    setOpen(true)
  };

  const handleCloseTask = () => {
    setOpen(false)
  }

  const handleSetTaks = (task: any) => {
    if (task) {
      if (task._id) {
        const taskIndex = values.tasks.findIndex((item: any) => item._id === task._id)
        let tasks = [...values.tasks];
        tasks[taskIndex] = task;
        setValues({...values, tasks: tasks})
      } else {
        task._id = values?.tasks?.length?.toString()
        values.tasks.push(task)
      }
    }

    setOpen(false)
  }

  const handleEditTask = (task: any) => {
    setTaskSelected(task)
    setOpen(true)
  }

  const handleSave = () => {
    onClose(values);
  }

  const handleClose = () => {
    onClose();
  }

  return(
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.flexCol}>
        <h3>Criar/Editar Fase</h3>
        <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-title">Nome da Fase</InputLabel>
          <OutlinedInput
            id="outlined-title"
            value={values.title}
            onChange={handleChange('title')}
            labelWidth={105}
          />
        </FormControl>
        <TextField
          label='Descrição da Fase'
          className={classes.margin}
          fullWidth
          id="phase-description"
          multiline
          rows={4}
          defaultValue={values.description}
          onChange={handleChange('description')}
          variant="outlined"
        />
        <div>
          <h3>Tarefas</h3>
          <div className={classes.flexRow}>
            <Paper elevation={3} className={classes.cardAdd} key='-1' onClick={handleCreateTask}>
              <div className={classes.cardInside}><AddIcon fontSize="large" style={{color: '#fff'}}/></div>
            </Paper>
            <div className={classes.root}>
              <GridList className={classes.gridList} cols={2.5}>
                {values.tasks.map((task: any, index: number) => (
                  <Paper elevation={3} className={classes.card} key={index} onClick={() => handleEditTask(task)}>
                    <span className={`${classes.cardNumber}`}>{index+1}</span>
                  </Paper>
                ))}
              </GridList>
            </div>
          </div>
        </div>
        <div className={`${classes.flexRow} ${classes.justifyCenter} ${classes.marginTop24}`}>
          <Button variant="contained" color="primary" style={{width: 305, marginRight: 24}} onClick={handleSave}>
            Salvar
          </Button>
          <Button variant="contained" color="secondary" style={{width: 305}} onClick={handleClose}>
            Cancelar
          </Button>
        </div>
        <Modal
          open={open}
          onClose={handleCloseTask}
        >
          <CreateTask selectedValue={taskSelected} onClose={(event) => handleSetTaks(event)}/>
        </Modal>
        
      </div>
    </div>
  )
}

export default CreatePhase