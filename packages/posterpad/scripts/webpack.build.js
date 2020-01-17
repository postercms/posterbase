const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const buildConfig = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, '../src'),
    style: path.resolve(__dirname, '../src/assets/scss/style.scss'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': '../src',
    },
  },
  output: {
    path: path.join(__dirname, '../dist'),
    library: 'posterpad',
    libraryTarget: 'umd',
  },
  externals: ['react', 'react-dom'],
};

module.exports = merge.smart(baseConfig, buildConfig);
