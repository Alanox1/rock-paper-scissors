import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App';

// Utiliza createRoot para renderizar la aplicación de React
const root = createRoot(document.getElementById('root'));
root.render(<App />);