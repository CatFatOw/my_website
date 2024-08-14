import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_website/', // Update this to your repository name
  plugins: [react()],
});
