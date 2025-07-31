import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Импорт глобальных стилей и шрифтов
import './assets/fonts/fonts.css';

// Находим корневой элемент и рендерим приложение
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Root element with id 'root' not found in index.html");
}
