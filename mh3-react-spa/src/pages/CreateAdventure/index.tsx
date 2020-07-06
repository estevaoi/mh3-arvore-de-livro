import { Button, FormControl, GridList, InputLabel, Modal, OutlinedInput, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Adventure } from 'interfaces/adventure';
import React from 'react';
import treeApi from '../../services/arvore-api';
import { useStyles } from '../../styles';
import CreatePhase from '../CreatePhase';

const body = {
  "query": "fragment bookNavigationFields on Book {\n  name\n  author\n  slug\n  layout\n  v2ready\n  degree\n  manualInfoChecked\n  description\n  imageUrlIntermediaria\n  imageUrlThumb\n  premium\n  __typename\n}\n\nquery SearchBookWithFiltersQuery($searchTerm: String!, $page: Int, $opts: String) {\n  searchBook: searchBookV2(searchTerm: $searchTerm, page: $page, opts: $opts) {\n    searchFilters\n    books {\n      ...bookNavigationFields\n      __typename\n    }\n    __typename\n  }\n}\n",
  "variables": {
      "searchTerm": "harry",
      "opts": "",
      "page": 1
  },
  "operationName": "SearchBookWithFiltersQuery"
}

const CreateAdventure: React.FC = () => {

  const classes = useStyles();

  const [phaseSelected, setPhaseSelected] = React.useState<any>();
  const [values, setValues] = React.useState<Adventure>({
    _id: '',
    title: '',
    book: null,
    img: '',
    phases: [],
    points: 30
  });

  const [books, setBooks] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleChange: any = (prop: keyof Adventure) => (event: any) => {
    const value = prop === 'book' ? books[event.target.value] : event.target.value
    setValues({ ...values, [prop]: value });
  };

  const searchBooks = (event?: any) => {
    setLoading(true)
    body.variables.searchTerm = event?.target?.value;
    treeApi.post('/graphql', body).then(response => {
      let data = response?.data?.data?.searchBook?.books;
      data = data ? data : [];
      
      setBooks(data.map((item: any) => {
        return {
          img: item?.imageUrlThumb,
          title: item?.name,
          description: item?.description,
          author: item?.author,
          path: item?.slug
        }
      }))
      setLoading(false)
    })
  }

  const [open, setOpen] = React.useState(false);
  const handleCreatePhase = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  }

  const handleSetPhase = (phase: any) => {
    if (phase) {
      if (phase._id) {
        const phaseIndex = values.phases.findIndex((item: any) => item._id === phase._id)
        let phases = [...values.phases];
        phases[phaseIndex] = phase;
        setValues({...values, phases: phases})
      } else {
        phase._id = values?.phases?.length?.toString()
        values.phases.push(phase)
      }
    }

    setOpen(false)
  }

  const handleEditPhase = (phase: any) => {
    setPhaseSelected(phase)
    setOpen(true)
  }

  const handleSave = () => {

  }

  return(
    <div className={classes.flexCol}>
      <h3>Criar Aventura</h3>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-name">Nome da Aventura</InputLabel>
        <OutlinedInput
          id="outlined-name"
          value={values.title}
          onChange={handleChange('title')}
          labelWidth={130}
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <Autocomplete
          fullWidth
          loading={loading}
          loadingText='Buscando livros...'
          id="outlined-book"
          options={books}
          noOptionsText='Comece digitando o nome do livro'
          getOptionLabel={(option) => option.title}
          getOptionSelected={(option) => option}
          onChange={handleChange('book')}
          onInputChange={searchBooks}
          renderInput={(params) => <div><TextField {...params} label="Livro Referência" variant="outlined" /></div>}
        />
      </FormControl>
      {( values.book ? <div className={classes.flexCol}>
        <h3>Livro</h3>
        <div className={classes.flexRow}>
          <Paper elevation={3} className={classes.adventureCard}>
            <img src={values.book.img} alt={values.book.title} className={classes.adventureList} />
          </Paper>
          <div className={classes.flexColFull}>
            <h2>{values.book.title}</h2>
            <div className={classes.flexRow}>
              <h3 style={{margin: '0px'}}>Autor(a):</h3><span style={{fontSize: '1.17em'}}>{values.book.author}</span>
            </div>
            <br/>
            <TextField
              fullWidth
              id="standard-multiline-static"
              multiline
              rows={4}
              defaultValue={values.book.description}
            />
          </div>
        </div>
      </div> : null
      )}
      <div>
        <h3>Desafios</h3>
        <div className={classes.flexRow}>
          <Paper elevation={3} className={classes.cardAdd} key='-1' onClick={handleCreatePhase}>
            <div className={classes.cardInside}><AddIcon fontSize="large" style={{color: '#fff'}}/></div>
          </Paper>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
              {values.phases.map((phase, index) => (
                <Paper elevation={3} className={classes.card} key={index} onClick={() => handleEditPhase(phase)}>
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
        onClose={handleClose}
      >
        <CreatePhase selectedValue={phaseSelected} onClose={(event) => handleSetPhase(event)}/>
      </Modal>
      
    </div>
  )
}

export default CreateAdventure