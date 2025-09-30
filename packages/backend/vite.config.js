import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  // Configure plugins for Vite
  plugins: [
    // This plugin wraps your Node/Express app to run it with Vite's dev server logic
    ...VitePluginNode({
      // The entry point file for your backend application
      appPath: './src/server.ts',
      // The project root directory
      root: './',
      // Tell Vite to automatically run the server after changes
      adapter: 'express', 
    }),
  ],

  // Configure Vite's behavior
  server: {
    // Port for the backend server to run on (e.g., 8080)
    port: 8080, 
  },

  // Build configuration specific to the Node environment
  build: {
    // Set the output directory for the compiled JavaScript
    outDir: 'dist',
    // Bundle for a server environment (Node.js)
    ssr: 'src/server.ts',
    // Keep internal modules as CommonJS for Node compatibility
    target: 'node18', 
    // Prevent common libraries (like express) from being bundled, 
    // relying on them being in node_modules
    rollupOptions: {
      external: ['express'],
    },
    // Prevent Vite from copying the index.html from the root
    emptyOutDir: true, 
  },
});
