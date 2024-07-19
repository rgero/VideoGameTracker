import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import AppLayout from './components/ui/AppLayout';
import TestPage from './components/pages/TestPage';

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <BrowserRouter>
            <Routes>
              <Route element={<AppLayout/>}>
                <Route index element={<TestPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
