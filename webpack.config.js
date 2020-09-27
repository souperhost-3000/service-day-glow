const path = require('path');

const SRC_FILE = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: SRC_FILE,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
      },
    ],
  },
};
