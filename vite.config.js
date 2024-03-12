import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    // Configura el punto de entrada de tu aplicación
    rollupOptions: {
      input: {
        main: './src/index.jsx' // Ruta al archivo index.jsx
      }
    }
}
});