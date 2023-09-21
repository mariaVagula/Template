import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e81dd0',
      light: '#e486d8',
      contrastText: '#ffe4ff',
    },
    secondary: {
      main: '#d8148c',
      light: '#ec79bf',
      dark: '#a20c63',
      contrastText: '#ffe2e9',
    },
    error: {
      main: '#ff0000',
      contrastText: '#ffd9d9',
    },
    warning: {
      main: '#ffbf00',
      dark: '#bd9200',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#3590a2',
    },
    success: {
      main: '#23dc29',
      dark: '#208124',
      light: '#88d88c',
    },
    background: {
      default: '#ffd2ef',
      paper: '#fb8df8',
    },
    text: {
      primary: '#000000',
      hint: '#000000',
      secondary: 'rgba(8,0,0,0.7)',
      disabled: 'rgba(10,10,10,0.5)',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </ThemeProvider>
);
