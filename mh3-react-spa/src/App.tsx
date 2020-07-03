import { Container, CssBaseline, useMediaQuery } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import Routes from './routes';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <CssBaseline/>
        {/* <Button onClick={handleChangeTheme}>Trocar tema</Button> */}
        <Routes/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
