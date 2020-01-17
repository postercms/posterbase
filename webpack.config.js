const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./scripts/webpack.base');
const optimizedConfig = require('./scripts/webpack.optim');

const productionConfiguration = function() {
  const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
  return {
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      }),
    ],
  };
};

module.exports = merge.smart(
  baseConfig,
  optimizedConfig,
  productionConfiguration(),
);
