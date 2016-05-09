module.exports = {
  entry: [
    __dirname + '/js/app.js'
  ],
  output: {
    path: __dirname + "/js",
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
