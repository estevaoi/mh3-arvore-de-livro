import { Avatar, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import { useStyles } from './styles';

interface User {
  name: string;
  img: string;
  type: string;
  class: string;
}

function App() {

  // const location = useLocation();
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:450px)');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = React.useMemo(() => createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            contrastText: '#fff',
            // light: será calculada com base em palette.primary.main,
            main: '#45d0c1',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
          },
          secondary: {
            light: '#8553f4',
            main: '#8553f4',
          },
          text: {
            primary: '#53656F',
            secondary: '#53656F',
            disabled: '#53656F',
            hint: '#53656F'
      
          },
          common: {
            black: '#53656F'
          },
          // Usado por `getContrastText()` para maximizar o contraste entre
          // o plano de fundo e o texto.
          contrastThreshold: 3,
          // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
          // dois índices dentro de sua paleta tonal.
          // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
          tonalOffset: 0.2,
        },
    }),
    [prefersDarkMode],
  )
  
  const [open, setOpen] = React.useState(matches);
  const [user, setUser] = React.useState<User>();
  
  useEffect(() => {
    setOpen(matches)
  }, [matches])
  
  useEffect(() => {
    const usr = sessionStorage.getItem('user');
    setUser(usr ? JSON.parse(usr) : {
      name: 'Ana',
      type: 'Teacher',
      class: 'Português',
      img: './assets/images/teacher.jpg'
    })
  }, [])
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          {(
            user ? <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            {(
              matches && user ? <div className='flex col align-center pd-24'>
              <Avatar 
                alt='Avatar' 
                src={user.img}
                className={classes.large} />
              <ListItemText 
                primary={(user.type === 'Teacher' ? 'Prof. ' : '') + user.name}
                secondary={user.type === 'Teacher' ? 'Português' : '1 Ano'} />
            </div> : null
            )}
            <List>
              <Link to={user?.type === 'Teacher' ? '/teacher-area' : user?.type === 'Student' ? '/student-area' : '/'}>
                <ListItem button key='home'>
                <ListItemIcon style={{ color: '#fff' }}><SportsEsportsIcon/></ListItemIcon>
                  <ListItemText primary='Aventuras' />
                </ListItem>
              </Link>
              {/* <Link to='/'>
                <ListItem button key='myAccount'>
                  <ListItemIcon style={{ color: '#fff' }}><AccountBoxIcon/></ListItemIcon>
                  <ListItemText primary='Minha Conta' />
                </ListItem>
              </Link>
              <Link to='/'>
                <ListItem button key='description'>
                  <ListItemIcon style={{ color: '#fff' }}><DescriptionIcon/></ListItemIcon>
                  <ListItemText primary='Notas' />
                </ListItem>
              </Link>
              
              <Link to='/'>
                <ListItem button key='classes'>
                  <ListItemIcon style={{ color: '#fff' }}><ClassIcon/></ListItemIcon>
                  <ListItemText primary='Turmas' />
                </ListItem>
              </Link> 
              <Link to='/'>
                <ListItem button key='settings'>
                  <ListItemIcon style={{ color: '#fff' }}><SettingsIcon/></ListItemIcon>
                  <ListItemText primary='Configurações' />
                </ListItem>
              </Link>*/}
              <Link to='/'>
                <ListItem button key='exit'>
                  <ListItemIcon style={{ color: '#fff' }}><PowerSettingsNewIcon/></ListItemIcon>
                  <ListItemText primary='Sair' />
                </ListItem>
              </Link>
            </List>
          </Drawer> : null
          )}
          <main className={classes.content}>
            <Routes/>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
      
  );
}

export default App;
