import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif'
      ].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
