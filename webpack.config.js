module.exports = {
  entry: "./src/App.jsx",
  output: {
    path: "./public",
    filename: "bundle.js",
  },
  //what is bundle.js doing?
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192' 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};