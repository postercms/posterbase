const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('@akterstack/jskits/webpack.base')
const optimConfig = require('@akterstack/jskits/webpack.optim')

const productionConfiguration = function() {
  const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
  return {
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      })
    ]
  }
}

module.exports = merge.smart(baseConfig, optimConfig, productionConfiguration())
