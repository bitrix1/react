var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/public/build/',
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          plugins: ['transform-runtime',"transform-object-rest-spread"],
          presets: ['es2015', 'stage-0', 'stage-2', 'react'],
        },
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.js$/,
        loader: "react-hot!babel",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}
//loaders: ["babel-loader?presets[]=es2015&presets[]=stage-2&presets[]=stage-0","react-hot"],