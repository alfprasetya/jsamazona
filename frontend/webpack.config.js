const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  // Entry point for bundling
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',  // Output filename
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),  // Serve static files from the current directory (frontend/)
    },
    open: true,  // Automatically open the browser
    port: 8080,  // Serve on port 8080
  },
};
