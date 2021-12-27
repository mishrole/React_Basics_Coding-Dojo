import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes/root';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);