const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.umd.js',
    libraryTarget: 'umd',
    library: 'optimizeUIEvent'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}
