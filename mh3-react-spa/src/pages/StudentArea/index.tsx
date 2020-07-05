import { FormControl, GridList, InputAdornment, InputLabel, OutlinedInput, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Loader from 'components/Loader';
import { BOOK_BODY } from 'mock/book.mock';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import treeApi from '../../services/arvore-api';
import { useStyles } from '../../styles';
import './styles.css';

interface Titles {
  img: string;
  title: string;
}

interface Search {
  search: string;
}

export default function StudentArea() {

  const body = BOOK_BODY;

  const history = useHistory();
  const classes = useStyles();

  const [myAdventures, setMyAdventures] = useState<Array<Titles>>([])
  const [highlighted, setHighlighted] = useState<Array<Titles>>([])
  const [searchs, setSearchs] = useState<Array<Titles>>([])
  const [loading, setLoading] = useState<boolean>(false)
  

  useEffect(() => {
    setLoading(true)
    let calls = 2;
    treeApi.post('/graphql', body).then(response => {
      const data = response?.data?.data?.searchBook?.books;
      setMyAdventures(data.map((item: any, index: number) => {
        return {
          _id: index,
          img: item.imageUrlThumb,
          title: item.name,
        }
      }));
      calls--;
      if (calls === 0)
        setLoading(false)
    })

    let body2 = JSON.parse(JSON.stringify(body))
    body2.variables.searchTerm = 'como';
    
    treeApi.post('/graphql', body2).then(response => {
      const data = response?.data?.data?.searchBook?.books;
      setHighlighted(data.map((item: any, index: number) => {
        return {
          _id: index,
          img: item.imageUrlThumb,
          title: item.name,
        }
      }));
      calls--;
      if (calls === 0)
        setLoading(false)
    })
  }, [])

  const [values, setValues] = React.useState<Search>({
    search: '',
  });

  const handleChange = (prop: keyof Search) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const searchBooks = (event?: any) => {
    if (!event || event.key === 'Enter') {
      const body3 = {...body}
      body3.variables.searchTerm = values.search;
      treeApi.post('/graphql', body3).then(response => {
        const data = response?.data?.data?.searchBook?.books;
        setSearchs(data.map((item: any) => {
          return {
            img: item.imageUrlThumb,
            title: item.name,
          }
        }));
      })
    }
  }

  const handleGoToAdventure = (adventure: any) => {
    history.push(`/student-adventure/${adventure._id}`)
  }
  
  return (
    loading ? <Loader loading={loading}/> :
    <div>
      <h3>Minhas Aventuras em Andamento</h3>
      <div className={classes.flexRow}>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {myAdventures.map((adventure, index) => (
              <Paper elevation={3} className={classes.adventureCard} key={index} onClick={() => handleGoToAdventure(adventure)}>
                <img src={adventure.img} alt={adventure.title} className={classes.adventureList} />
              </Paper>
            ))}
          </GridList>
        </div>
      </div>

      <br/>
      <h3>Aventuras Concluídas</h3>
      <div className={classes.flexRow}>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {highlighted.map((adventure, index) => (
              <Paper elevation={3} className={classes.adventureCard} key={index} onClick={() => handleGoToAdventure(adventure)}>
                <img src={adventure.img} alt={adventure.title} className={classes.adventureList} />
              </Paper>
            ))}
          </GridList>
        </div>
      </div>

      <br/>
      <h3>Indicadas para mim</h3>
      <div className={classes.flexRow}>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {highlighted.map((adventure, index) => (
              <Paper elevation={3} className={classes.adventureCard} key={index} onClick={() => handleGoToAdventure(adventure)}>
                <img src={adventure.img} alt={adventure.title} className={classes.adventureList} />
              </Paper>
            ))}
          </GridList>
        </div>
      </div>

      <br/><br/><br/>

      <h3>Pesquisar Aventuras</h3>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search">Aventura</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          value={values.search}
          onChange={handleChange('search')}
          onKeyUp={(event) => searchBooks(event)}
          startAdornment={<InputAdornment position="start"><SearchIcon onClick={() => searchBooks()}/></InputAdornment>}
          labelWidth={65}
        />
      </FormControl>

      {(
        searchs.length > 0 ? <div>
          <h3>Resultados da Busca</h3>
          <div className={classes.flexRow}>
            <div className={classes.root}>
              <GridList className={classes.gridList} cols={2.5}>
                {searchs.map((adventure, index) => (
                  <Paper elevation={3} className={classes.adventureCard} key={index}>
                    <img src={adventure.img} alt={adventure.title} className={classes.adventureList} />
                  </Paper>
                ))}
              </GridList>
            </div>
          </div>
        </div> : null
      )}
    </div>
  );
}
