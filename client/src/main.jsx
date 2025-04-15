import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import theme from './Theme.jsx';

createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>

)
