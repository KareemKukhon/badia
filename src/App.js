import { createTheme, CssBaseline } from '@mui/material';
import './App.css';
import IntroPage from './pages/introPage';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/homePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',

    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IntroPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },

  ]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Test></Test> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
