import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style_global.css'; // Estilos globales
import './styles/styles_components.css'; // Estilos globales
import './styles/styles_views.css'; // Estilos globales

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);