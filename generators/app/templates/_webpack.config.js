module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", './src/index.js']
  },
  output: {
    path: 'target',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {test: /\.scss$/,                     loader: 'style!css!sass'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
