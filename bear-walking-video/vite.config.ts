import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Config } from 'remotion/config';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
