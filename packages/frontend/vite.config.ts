import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Use the faster SWC plugin

// https://vitejs.dev/config/
export default defineConfig({
  // Use the SWC plugin for fast compilation of JSX/TSX
  plugins: [react()],
  
  // Set up the development server
  server: {
    port: 5173, // Default Vite port
    // Optional: Proxy API requests to your backend
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Assumes your backend runs on 8080
        changeOrigin: true,
        secure: false,
        // Optional: Rewrite the path if needed (e.g., removing /api)
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
  
  // Configure the build process
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
