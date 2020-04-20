import "core-js/modules/es.array.join";

var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.join(process.cwd(), 'src')
    }
  }
};