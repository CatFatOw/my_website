import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_website/', // Update this to match your new repository name
  plugins: [react()],
});
