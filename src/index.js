import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; /* Habilitamos lo que vamos a usar */

const root = ReactDOM.createRoot(document.getElementById('root')); /* Variable que llama a createRoot y pasa como parametro el id root */
root.render(<App />); /* La instruccion de renderizar la etiqueta App */
