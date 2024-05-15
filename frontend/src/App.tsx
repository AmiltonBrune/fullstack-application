import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';

import { useTheme } from './hooks/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <h1 className='poppins-thin'>VidFlex</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
