import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './styles/global';

import {
  PokemonProvider
} from './context/PokemonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </>
);
