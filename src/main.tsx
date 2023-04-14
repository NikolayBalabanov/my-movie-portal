import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StyledEngineProvider>
  </BrowserRouter>
);
