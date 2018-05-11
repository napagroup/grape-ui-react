const path = require('path')
console.log('__dirname', __dirname)
module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [],
  resolve: {
    modules: ['node_modules'],
    alias: {
        src: path.join(process.cwd(), 'src')
    }
  }
}