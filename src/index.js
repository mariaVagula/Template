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

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ea30d3',
      light: '#e486d8',
      contrastText: '#ffd2ff',
    },
    secondary: {
      main: '#d8148c',
      light: '#ec79bf',
      dark: '#a20c63',
      contrastText: '#ffc8e6',
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
      main: '#47c74c',
      dark: '#37bd3b',
    },
    background: {
      default: '#ffd2fa',
      paper: '#ffc9fd',
    },
    text: {
      primary: '#000000',
      hint: '#000000',
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
    <RouterProvider router={router} />
  </ThemeProvider>
);
