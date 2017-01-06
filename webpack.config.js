var path = require('path');

module.exports = {  
  entry: './app.ts',

  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    alias:{
      "api": path.resolve(__dirname, "./module-generated-code.js")
    }
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}