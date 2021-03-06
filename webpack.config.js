module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?url-false']
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: ['url-loader']
      }
    ]
  },
  node: {
    fs: 'empty',
    tls: 'empty'
  }
};