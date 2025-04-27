import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rishabh_porfolio_react/', // your repo name
  plugins: [react()],
});
