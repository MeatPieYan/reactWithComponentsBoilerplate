const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../client'),
  output: {
    path: path.resolve(__dirname, '../app/public/dist/client'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [ 'es2015', 'react', 'stage-0' ],
        plugins: [ 'transform-runtime', 'add-module-exports' ],
      },
    }],
  },
};
